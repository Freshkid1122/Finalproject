const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();

dotenv.config();
app.use(cors({
  origin: ['https://finalproject-tan-seven.vercel.app', 'https://finalproject-wbpa.vercel.app', 'http://localhost:5173', 'http://localhost:3000'],
  credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.port || 3000;
const URI = process.env.uri || 'mongodb+srv://Samuel:Sam.698807@cluster0.6cs5b.mongodb.net/Samuel?retryWrites=true&w=majority&appName=Cluster';
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Import models
const User = require('./model/userModel');
const Rider = require('./model/riderModel');
const Restaurant = require('./model/restaurantModel');

mongoose.connect(URI)
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Buyer Signup
app.post('/signup/buyer', async(req, res) => {
  try {
    const { name, mail, password } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ mail });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({
      name,
      mail,
      password: hashedPassword,
      userType: 'buyer'
    });
    
    await user.save();
    res.status(201).json({ message: 'Buyer account created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Restaurant Signup
app.post('/signup/restaurant', async(req, res) => {
  try {
    const { mail, ownerName, phoneNumber, restaurantName, address, password } = req.body;
    
    // Check if restaurant already exists
    const existingRestaurant = await Restaurant.findOne({ mail });
    if (existingRestaurant) {
      return res.status(400).json({ error: 'Restaurant with this email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const restaurant = new Restaurant({
      ownerName,
      mail,
      password: hashedPassword,
      restaurantName,
      phoneNumber,
      address
    });
    
    await restaurant.save();
    res.status(201).json({ message: 'Restaurant account created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rider Signup
app.post('/signup/rider', async(req, res) => {
  try {
    const { name, mail, phoneNumber, vehicleType, plateNumber, password } = req.body;
    
    // Check if rider already exists
    const existingRider = await Rider.findOne({ mail });
    if (existingRider) {
      return res.status(400).json({ error: 'Rider with this email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const rider = new Rider({
      name,
      mail,
      password: hashedPassword,
      phoneNumber,
      vehicleType,
      plateNumber
    });
    
    await rider.save();
    res.status(201).json({ message: 'Rider account created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Signin for Buyers
app.post('/signin/buyer', async (req, res) => {
    try {
        const { mail, password } = req.body;
        
        if (!mail || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = await User.findOne({ mail, userType: 'buyer' });
        if (!user) {
            return res.status(404).json({ error: 'Buyer account not found' });
        }

        // Compare password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { 
                userId: user._id, 
                email: user.mail, 
                userType: 'buyer',
                name: user.name 
            }, 
            JWT_SECRET, 
            { expiresIn: '24h' }
        );

        res.status(200).json({ 
            message: 'Buyer signed in successfully',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.mail,
                userType: 'buyer'
            }
        });
    } catch (error) {
        console.error('Error signing in buyer:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Signin for Restaurants
app.post('/signin/restaurant', async (req, res) => {
    try {
        const { mail, password } = req.body;
        
        if (!mail || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const restaurant = await Restaurant.findOne({ mail });
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant account not found' });
        }

        // Compare password
        const isValidPassword = await bcrypt.compare(password, restaurant.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { 
                userId: restaurant._id, 
                email: restaurant.mail, 
                userType: 'restaurant',
                name: restaurant.restaurantName,
                ownerName: restaurant.ownerName
            }, 
            JWT_SECRET, 
            { expiresIn: '24h' }
        );

        res.status(200).json({ 
            message: 'Restaurant signed in successfully',
            token,
            user: {
                id: restaurant._id,
                name: restaurant.restaurantName,
                ownerName: restaurant.ownerName,
                email: restaurant.mail,
                userType: 'restaurant',
                address: restaurant.address,
                phoneNumber: restaurant.phoneNumber
            }
        });
  } catch (error) {
        console.error('Error signing in restaurant:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Signin for Riders
app.post('/signin/rider', async (req, res) => {
    try {
        const { mail, password } = req.body;
        
        if (!mail || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const rider = await Rider.findOne({ mail });
        if (!rider) {
            return res.status(404).json({ error: 'Rider account not found' });
        }

        // Compare password
        const isValidPassword = await bcrypt.compare(password, rider.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { 
                userId: rider._id, 
                email: rider.mail, 
                userType: 'rider',
                name: rider.name,
                vehicleType: rider.vehicleType
            }, 
            JWT_SECRET, 
            { expiresIn: '24h' }
        );

        res.status(200).json({ 
            message: 'Rider signed in successfully',
            token,
            user: {
                id: rider._id,
                name: rider.name,
                email: rider.mail,
                userType: 'rider',
                phoneNumber: rider.phoneNumber,
                vehicleType: rider.vehicleType,
                plateNumber: rider.plateNumber,
                isAvailable: rider.isAvailable
            }
        });
    } catch (error) {
        console.error('Error signing in rider:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Universal signin (for backward compatibility)
app.post('/signin', async (req, res) => {
    try {
        const { mail, password } = req.body;
        
        if (!mail || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Try to find user in all collections
        let user = await User.findOne({ mail });
        let userType = 'buyer';
        
        if (!user) {
            user = await Restaurant.findOne({ mail });
            userType = 'restaurant';
        }
        
        if (!user) {
            user = await Rider.findOne({ mail });
            userType = 'rider';
        }

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { 
                userId: user._id, 
                email: user.mail, 
                userType: userType,
                name: user.name || user.restaurantName || user.ownerName
            }, 
            JWT_SECRET, 
            { expiresIn: '24h' }
        );

        res.status(200).json({ 
            message: 'User signed in successfully',
            token,
            user: {
                id: user._id,
                name: user.name || user.restaurantName || user.ownerName,
                email: user.mail,
                userType: userType
            }
        });
    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get user profile (protected route)
app.get('/profile', authenticateToken, async (req, res) => {
    try {
        let user;
        
        switch(req.user.userType) {
            case 'buyer':
                user = await User.findById(req.user.userId).select('-password');
                break;
            case 'restaurant':
                user = await Restaurant.findById(req.user.userId).select('-password');
                break;
            case 'rider':
                user = await Rider.findById(req.user.userId).select('-password');
                break;
            default:
                return res.status(400).json({ error: 'Invalid user type' });
        }
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        res.json({ user });
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Legacy signup route for backward compatibility
app.post('/signup', async(req, res) => {
  try {
    const { name, mail, password } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ mail });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({
      name,
      mail,
      password: hashedPassword,
      userType: 'buyer' // Default to buyer for backward compatibility
    });
    
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/', (req, res) => {
  res.send('Food Delivery API is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
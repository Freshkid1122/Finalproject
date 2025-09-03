import React from 'react';

const Last = () => (
  <footer style={{
    background: '#222',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem 0',
    left: 0,
    bottom: 0,
    width: '100%',
  }}>
    <p>© {new Date().getFullYear()} Your Project Name. All rights reserved.</p>
  </footer>
);

export default Last;
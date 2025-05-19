import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js';

const router = express.Router();

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  let token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'Access denied' });
  // Handle 'Bearer <token>' format
  if (token.startsWith('Bearer ')) {
    token = token.slice(7);
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

// Get User Profile
router.get('/profile', authenticateToken, async (req, res) => {
  console.log('/profile');
  
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ id: user.id, email: user.email });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
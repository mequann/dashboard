const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Redirect to Google for login
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google callback
router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: '/' }), (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.redirect(`${process.env.CLIENT_URL}/auth/success?token=${token}`);
});

// Optional: test route
router.get('/me', async (req, res) => {
    res.json({ user: req.user || null });
});

module.exports = router;

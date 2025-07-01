import express from 'express';
import passport from '../passport.js'; // adjust the path if needed
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';



const router = express.Router();

// Start Google login
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

//login failure
router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Login failure"
    });
});

//login success
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Login successful",
      user: req.user,
    });
  } else {
    res.status(403).json({
      error: true,
      message: "No user logged in"
    });
  }
});

// Local login route
router.post('/login', (req, res, next) => {
  passport.authenticate('local-login', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) {
      return res.status(401).json({ error: true, message: info.message });
    }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      return res.status(200).json({ error: false, message: 'Login successful', user });
    });
  })(req, res, next);
});

// Local signup route
router.post('/signup', (req, res, next) => {
  passport.authenticate('local-signup', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) {
      return res.status(400).json({ error: true, message: info.message });
    }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      return res.status(201).json({ error: false, message: 'Signup successful', user });
    });
  })(req, res, next);
});

// Google callback
// router.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   (req, res) => {
//     // Successful login
//     res.redirect('/profile');
//   }
// );


router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: `${CLIENT_URL.replace(/\/$/, '')}/profile`,
    failureRedirect: `${CLIENT_URL.replace(/\/$/, '')}/login`


  })
);

// Logout
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');

  });
});

export default router;

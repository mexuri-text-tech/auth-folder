import express from 'express';
import session from 'express-session'; // ✅ use express-session instead of cookie-session
import dotenv from 'dotenv';
import passport from './passport.js';
import authRoutes from './routes/auth.js';
import cors from 'cors';

dotenv.config();

const app = express();

// ✅ Allow frontend to talk to backend
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5175"],
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
  exposedHeaders: ['set-cookie']
}));

app.use(express.json());

// ✅ Configure express-session (fully compatible with passport)
app.use(session({
  secret: process.env.COOKIE_KEY || 'mexuri_secret_key', // must be a string
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    sameSite: 'none',
    secure: false,
  }
}));

// ✅ Initialize Passport and use session
app.use(passport.initialize());
app.use(passport.session());

// ✅ Auth routes
app.use('/auth', authRoutes);

// ✅ Public route
app.get('/', (req, res) => {
  res.send('<h2>Welcome! <a href="/auth/google">Login with Google</a></h2>');
});

// ✅ Example protected route
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}

app.get('/profile', isLoggedIn, (req, res) => {
  res.send(`
    <h2>Hello, ${req.user.displayName}!</h2>
    <p><a href="/auth/logout">Logout</a></p>
  `);
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("✅ Server running on http://localhost:" + PORT);
});

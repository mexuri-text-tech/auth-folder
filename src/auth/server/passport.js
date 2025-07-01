import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as LocalStrategy } from 'passport-local';
import dotenv from 'dotenv';

dotenv.config();

// Mock user database
const users = [];

// Find user by email helper
const findUserByEmail = (email) => users.find(user => user.email === email);

// Configure Local Strategy for login
passport.use('local-login', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  (email, password, done) => {
    const user = findUserByEmail(email);
    if (!user) {
      return done(null, false, { message: 'Incorrect email.' });
    }
    if (user.password !== password) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  }
));

// Configure Local Strategy for signup
passport.use('local-signup', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    if (findUserByEmail(email)) {
      return done(null, false, { message: 'Email already taken.' });
    }
    const newUser = { id: Date.now().toString(), email, password };
    users.push(newUser);
    return done(null, newUser);
  }
));

// Configure Google Strategy
passport.use(
    new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || '64519157957-kobfsf4g8m1q6f09bkubf38knkuctlcn.apps.googleusercontent.com',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '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',
      callbackURL: process.env.BACKEND_URL ? `${process.env.BACKEND_URL}/auth/google/callback` : 'http://localhost:5000/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      try {
        // Find or create user in mock DB
        let user = users.find(u => u.id === profile.id);
        if (!user) {
          user = {
            id: profile.id,
            email: profile.emails && profile.emails[0] ? profile.emails[0].value : '',
            displayName: profile.displayName,
            provider: 'google',
          };
          users.push(user);
        }
        return done(null, user);
      } catch (error) {
        console.error("Error in GoogleStrategy verify callback:", error);
        return done(error, null);
      }
    }
  )
);

// Serialize user into session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from session
passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;

const express = require('express');

// Chemin vers les routes user et routes post
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');


require('dotenv').config({ path: './config/.env' });
require('./config/db');

const app = express();
const path = require('path');
const mongoSanitize = require("express-mongo-sanitize");


// Headers & autorizations
const cors = require('cors');

// module morgan pour le suivi des requêtes
const morgan = require("morgan");

const corsOptions = {
  // on détermine la source qui est autorisé à faire des requêtes
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ['sessionId', 'Content-Type'],
  exposedHeaders: ['sessionId'],
  methods: 'GET,PUT,PATCH,POST,DELETE,HEAD,OPTIONS',
  preflightContinue: false
};
app.use(cors(corsOptions));

// Middelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// configuration express-mongo-sanitze
app.use(
  mongoSanitize({
      allowDots: true,
      replaceWith: "_",
  })
);


// gestionnaire de routage des images
app.use('/images', express.static(path.join(__dirname, 'images')));


// Routes
app.use('/api/auth', userRoutes);
app.use('/api/post', postRoutes);

module.exports = app;
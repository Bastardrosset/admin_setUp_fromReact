const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
// module morgan pour le suivi des requêtes et erreur dans terminal
const morgan = require("morgan");
//aide à sécuriser l'api en définissant divers en-têtes HTTP
const helmet = require('helmet');

// Chemin vers les routes user et routes post
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');


require('dotenv').config({ path: './config/.env' });
require('./config/db');


// Middelware
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));


// gestionnaire de routage des images
app.use('/images', express.static(path.join(__dirname, 'images')));


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/post', postRoutes);

app.listen(process.env.PORT, () => {
  console.log("Backend server is running!");
});
// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Business = require('./models/business');
const Review = require('./models/review');
const Photo = require('./models/photo');

// let user, business, review;
// let users, businesses, reviews;
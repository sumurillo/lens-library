const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

module.exports = {
  create,
  login,
  checkToken,
  getUser
};


function checkToken(req, res) {
  console.log('req.user', req.user);
  res.json(req.exp);
}

async function create(req, res) {
  console.log(req.body)
  try {
    // Add the user to the db
    const user = await User.create(req.body);
    console.log(user)
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json('Bad Credentials');
  }
}

async function getUser(req, res) {
  try {
    const userId = req.user._id; // Retrieve the user ID from the req.user object
    const user = await User.findOne({_id: userId});
    console.log((user)) // Find the user with the ID
    res.json(user); // Return the user object
  } catch (err) {
    console.error(err); // Handle any errors
  } 
}

/*--- Helper Functions --*/

function createJWT(user) {
  console.log(user)
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}
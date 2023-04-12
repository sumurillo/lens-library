const Business = require('../../models/business');

module.exports = {
  create
}

async function create(req, res) {
  req.body.userId = req.user._id
  try {
    const newBusiness = await Business.create(req.body);
    console.log(newBusiness);
    res.json(newBusiness)
  } catch (err) {
    res.json(400)
  }
}
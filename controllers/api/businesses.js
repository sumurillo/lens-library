const Business = require('../../models/business');

module.exports = {
  index,
  create

}

async function index(req, res) {
  try {
    const businesses = await Business.find({});
    res.json(businesses)
  } catch (err) {
    res.json(400)
  }
}


async function create(req, res) {
  req.body.userId = req.user._id
  try {
    console.log(req.body)
    // const newBusiness = await Business.create(req.body);
    const newBusiness = new Business(req.body)
    newBusiness.save()
    console.log(newBusiness);
    res.json(newBusiness)
  } catch (err) {
    res.json(400)
  }
}
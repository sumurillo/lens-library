const Business = require('../../models/business');

module.exports = {
  index,
  create,
  updateBusiness

}

async function index(req, res) {
  try {
    const businesses = await Business.find({})
    res.json(businesses)
  } catch (err) {
    res.json(400)
  }
}


async function create(req, res) {
  req.body.userId = req.user._id
  try {
    console.log(req.body)
    const newBusiness = Business.create(req.body)
    console.log(newBusiness);
    res.json(newBusiness)
    console.log(err)
  } catch (err) {
    res.json(400)
  }
}

async function updateBusiness(req, res) {
  console.log(req.body)
  try {
      const updated = await Post.findByIdAndUpdate(req.body._id, { $set: {
          content: req.body.content,
      }}, { new: true });
      res.json(updatedBusiness)
  } catch (err) {
      res.json(400)
  }
}

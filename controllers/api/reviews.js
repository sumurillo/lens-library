const Review = require('../../models/review');

module.exports = {
  index,
  create

}

async function index(req, res) {
  try {
    const reviews = await Reviews.find({});
    res.json(reviews)
  } catch (err) {
    res.json(400)
  }
}


async function create(req, res) {
  req.body.userId = req.user._id
  try {
    console.log(req.body)
    const newReview = new Review(req.body)
    newReview.save()
    console.log(newReview);
    res.json(newReview)
  } catch (err) {
    res.json(400)
  }
}
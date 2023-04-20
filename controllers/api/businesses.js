const Business = require('../../models/business');
const User = require('../../models/user');

module.exports = {
  index,
  getBusinessDetail,
  create,
  delete: deleteBusiness

}

async function index(req, res) {
  try {
    const businesses = await Business.find({})
    res.json(businesses)
  } catch (err) {
    res.json(400)
  }
}


async function getBusinessDetail (req, res) {
  console.log(req.params)
  try {
    const business = await Business.findById(req.params.id);
    console.log(business)
    if (!business) {
      return res.status(404).json({ error: 'Business not found' }); 
    }
    return res.status(200).json(business); 
    console.log(getBusinessDetail)
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' }); 
  }
};



async function create(req, res) {
  req.body.userId = req.user._id
  try {
    console.log(req.body)
    const newBusiness = await Business.create(req.body)
    if (newBusiness) {
      const currentUser = await User.findById(req.user._id)
      currentUser.business = newBusiness._id
      currentUser.save()
    }
    res.json(newBusiness)
  } catch (err) {
    console.log(err)
    res.json(400)
  }
}

async function deleteBusiness(req, res) {
  try {
    const deletedBusiness = await Business.findByIdAndDelete(req.params.id);
    console.log(deletedBusiness);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }}
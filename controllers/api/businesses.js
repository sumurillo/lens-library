const Business = require('../../models/business');

module.exports = {
  index,
  create,
  updateBusiness,
  edit,
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
    const newBusiness = await Business.create(req.body)
    console.log(newBusiness);
    res.json(newBusiness)
  } catch (err) {
    console.log(err)
    res.json(400)
  }
}

function edit(req, res) {
  try {
  Business.findOne({_id: req.params.id}, function(err, business) {
     if (err || !business) return res.redirect('/businesses');
      res.json('business/edit', { business });
  })
  } catch(err) {
    res.json(400)
  }
};

async function updateBusiness(req, res) {
  console.log(req.body)
  try {
      const updated = await Business.findByIdAndUpdate(req.body._id, { $set: {
          content: req.body.content,
      }}, { new: true });
      res.json(updatedBusiness)
  } catch (err) {
      res.json(400)
  }
}

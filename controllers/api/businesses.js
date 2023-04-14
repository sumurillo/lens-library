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
    const newBusiness = Business.create(req.body)
    console.log(newBusiness);
    res.json(newBusiness)
    console.log(err)
  } catch (err) {
    res.json(400)
  }
}

// async function createPhoto(req, res) {
//   try {
  
//     console.log(req.body)
//     const photo =  await Photo.create(req.body)
//     // find business by it's id
//     db.businesses.find({_id})
//     //push photo id into the photos array of the business
//     photos.push()
//     // save the business
//     console.log(newBusiness);
//     res.json(photo)
//     console.log(err)
//   } catch (err) { 
//     res.json(400)
//   }
// }
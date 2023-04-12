const express = require('express');
const router = express.Router();
const businessesCtrl = require('../../controllers/api/businesses');


router.post('/newBusiness ', businessesCtrl.create);

module.exports = router;
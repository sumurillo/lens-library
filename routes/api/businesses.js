const express = require('express');
const router = express.Router();
const businessesCtrl = require('../../controllers/api/businesses');


router.post('/business ', businessesCtrl.create);

module.exports = router;
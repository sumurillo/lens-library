const express = require('express');
const router = express.Router();
const businessesCtrl = require('../../controllers/api/businesses');


router.post('/', businessesCtrl.create);

module.exports = router;
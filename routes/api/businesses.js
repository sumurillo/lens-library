const express = require('express');
const router = express.Router();
const businessesCtrl = require('../../controllers/api/businesses');


router.post('/', businessesCtrl.create);
router.get('/', businessesCtrl.index)

module.exports = router;
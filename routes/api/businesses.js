const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const businessesCtrl = require('../../controllers/api/businesses');


router.post('/', businessesCtrl.create);
router.get('/', businessesCtrl.index)
router.put('/update', ensureLoggedIn, businessesCtrl.updateBusiness);

module.exports = router;
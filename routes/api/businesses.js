const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const businessesCtrl = require('../../controllers/api/businesses');


router.get('/', businessesCtrl.index)
router.get('/:id', businessesCtrl.getBusiness);
router.post('/', businessesCtrl.create);
router.put('/:id', businessesCtrl.updateBusiness);

module.exports = router;
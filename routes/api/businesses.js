const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const businessesCtrl = require('../../controllers/api/businesses');


router.get('/', businessesCtrl.index)
router.get('/:id', businessesCtrl.getBusinessDetail);
router.post('/', businessesCtrl.create);
router.delete('/:id', businessesCtrl.delete);

module.exports = router;
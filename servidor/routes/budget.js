const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController');
const auth = require('../middleware/auth');

router.post('/', auth, budgetController.setInitialBudget );
router.get('/', auth, budgetController.getBudget );
router.put('/:id', auth, budgetController.upgradeBudget );


module.exports = router;
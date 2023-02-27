const express = require('express');

const router = express.Router();

const expenseController = require('../controllers/expenseController');

router.get('/',expenseController.getExpenses)

router.post('/addExpense',expenseController.postAddExpense)

router.delete('/deleteExpense/:id',expenseController.deleteExpense)

module.exports = router ;
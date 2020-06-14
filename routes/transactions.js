const express = require('express');
const router = express.Router();
const {getTransactions, addTransaction, deleteTransaction} = require('../controllers/transactions');

// route for getting all transactions and adding new one
router.route('/')
    .get(getTransactions)
    .post(addTransaction);

// route to delete transaction by its ID
router.route('/:id')
    .delete(deleteTransaction);

module.exports = router;
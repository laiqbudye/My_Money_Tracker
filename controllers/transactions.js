const Transaction = require('../models/Transaction');

// get all transactions
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            data: transactions,
            count: transactions.length,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            error: 'Server Error',
            success: false
        })
    }
};


// Add Transaction
exports.addTransaction = async (req, res, next) => {

    try {
        const { text, amount } = req.body;

        const transaction = Transaction.create(req.body);
        return res.status(201).json({
            data: transaction,
            success: true
        })
    } catch (error) {
        if(error.name === "ValidationError"){
            const messages = Object.values(error.errors).map(val => val.message);

            return res.status(400).json({
                error: messages,
                success: false
            })
        }else{
            return res.status(500).json({
                error: 'Server Error',
                success: false
            })
        }
    }

};

// Delete Transaction
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if(!transaction){
            return res.status(404).json({
                error: 'No transaction found',
                success: false
            })
        }

        await transaction.remove();

        return res.status(200).json({
            data: {},
            success: true
        })
    } catch (error) {
        return res.status(400).json({
            error: 'Server error',
            success: false
        })
    }
};
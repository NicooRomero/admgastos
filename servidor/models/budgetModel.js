const mongoose = require('mongoose');

const BudgetSchema = mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    spend: {
        type: Number
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: { 
        type: Date, 
        default: Date.now() 
    }

});

module.exports = mongoose.model('budgetModel', BudgetSchema);
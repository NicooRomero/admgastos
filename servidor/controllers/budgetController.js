const Budget = require('../models/budgetModel');

exports.setInitialBudget = async (req, res) => {

    try {
        let budget;

        budget = new Budget(req.body);

        //budget.user = req.user.email;
        budget.creator = req.user.id;
        await budget.save();

        //res.json(amount)
        res.send('Cantidad establecida con éxito')

    } catch (error) {
        console.log(error);
        res.status(400).send('Se a producido un error');
    }
}

exports.getBudget = async (req, res) => {

    try {

        const budget = await Budget.find({ creator: req.user.id });

        res.json({ budget })

    } catch (error) {
        console.log(error);
        res.status(500).send('Se a producido un error')
    }

}

exports.upgradeBudget = async (req, res) => {
    const { amount } = req.body;
    const newAmount = {};

    if(amount) {
        newAmount.amount = amount;
    }

    try {
        let amount = Budget.findById(req.params.id);

        amount = await Budget.findByIdAndUpdate({_id: req.params.id}, newAmount, {new: true });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}
const User = require('../models/userModel')
const Expense = require('../models/expenseModel')

const sequelize = require('../database')


exports.getLeaderBoard = async(req,res) =>{
    
    
    const userDetails = await User.findAll({
        attributes:['id', 'name', [sequelize.fn('sum',sequelize.col('expense')), 'totalExpense']],
        include: [
            {
                model: Expense,
                attributes: []
            },
        ],
        group: ['user.id'],
        order: [['totalExpense','DESC']]
    })
    
   

    res.status(200).json(userDetails)
    
    

}
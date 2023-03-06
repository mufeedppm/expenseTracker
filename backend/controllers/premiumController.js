const User = require('../models/userModel')
const Expense = require('../models/expenseModel')


exports.getLeaderBoard = async(req,res) =>{
    
    const exp= await Expense.findAll()
    const users = await User.findAll()
    
    const userExpense={}

    exp.forEach((expense)=>{
        if(userExpense[expense.userId]){
            userExpense[expense.userId] = userExpense[expense.userId] + expense.expense
        }
        else{
            userExpense[expense.userId] = expense.expense
        }
    })
    let userDetails = []
    users.forEach((user)=>{
        userDetails.push({name: user.name, totalExpense:userExpense[user.id] || 0} )
    })

    userDetails.sort((a,b) => b.totalExpense - a.totalExpense)

    res.status(200).json(userDetails)
    
    console.log(userDetails)
    

}
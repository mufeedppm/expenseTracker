const User = require('../models/userModel')
const Expense = require('../models/expenseModel')



exports.getExpenses = async (req,res) => {
    try{
    
        const expense= await req.user.getExpenses()
        const user= await req.user
        
        return res.status(200).json({expenseData: expense,premium:user.premiumUser})
    }catch(err){
        
        console.log(err)
    }
}

exports.postAddExpense = async (req,res) => {
    try{
    
    const item =req.body.item;
    const expense = req.body.expense;
    const category = req.body.category;
    const description = req.body.description

    if(item==''|| expense=='' || category=='' || description==''){
        res.json({message:'Please Enter All Fields'})
    }
    else{
        const data = await req.user.createExpense({
            item: item,
            expense: expense,
            category: category,
            description: description,
            
        })
        return res.status(200).json({expenseData: data})
    }
    }catch(err){
        console.log(err)
    }
    
}

exports.deleteExpense = async (req,res) =>{
    try{
        const expId = req.params.id
        const resp = await Expense.destroy({where:{id:expId}})
        res.json({response:resp})
    }catch(err){
        console.log(err)
    }
}
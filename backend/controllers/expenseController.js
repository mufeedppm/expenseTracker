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
        if(!req.user.totalExpense){
            req.user.totalExpense=0
        }
        let expenseSum = parseInt(req.user.totalExpense)+parseInt(expense) 
        await req.user.update({totalExpense: expenseSum})

        return res.status(200).json({expenseData: data})
    }
    }catch(err){
        console.log(err)
    }
    
}

exports.deleteExpense = async (req,res) =>{
    try{
        // const expId = req.params.id
        // const resp = await Expense.destroy({where:{id:expId}})
        // req.user.update({totalExpense:})
        // res.json({response:resp})
         
        const expId = req.params.id
        const resp = await Expense.findAll({where:{id:expId}})
        const response = await Expense.destroy({where:{id:expId}})
        const user = await User.findOne({where:{id: resp[0].userId}})
        
        const expenseSum = parseInt(user.totalExpense)-parseInt(resp[0].expense)
        user.update({totalExpense: expenseSum})
        res.json({response:response})
    }catch(err){
        console.log(err)
    }
}
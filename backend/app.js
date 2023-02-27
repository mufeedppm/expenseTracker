const bodyParser = require('body-parser')

const express = require('express')

const cors = require('cors')

const app = express();

const User = require('./models/userModel')
const Expense = require('./models/expenseModel')

app.use(cors());

app.use(bodyParser.json({extended: false}))

const sequelize = require('./database');

const signUpRoutes = require('./routes/signUpRoutes')

const loginRoutes =  require('./routes/loginRoutes')

const expenseRoutes = require('./routes/expenseRoutes')

app.use('/user',signUpRoutes);

app.use('/user',loginRoutes)

app.use('/expense',expenseRoutes)

Expense.belongsTo(User)
User.hasMany(Expense);


sequelize.sync({})
.then(()=>{
    app.listen(3000)

}).catch(err=>console.log(err))
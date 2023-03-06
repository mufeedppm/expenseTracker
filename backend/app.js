const bodyParser = require('body-parser')

const express = require('express')

const cors = require('cors')

require('dotenv').config();

const app = express();

const User = require('./models/userModel')
const Expense = require('./models/expenseModel')
const Order = require('./models/orderModel')

app.use(cors());

app.use(bodyParser.json({extended: false}))

const sequelize = require('./database');

const signUpRoutes = require('./routes/signUpRoutes')

const loginRoutes =  require('./routes/loginRoutes')

const expenseRoutes = require('./routes/expenseRoutes')

const purchaseRoutes = require('./routes/purchaseRoutes')

const premiumRoutes = require('./routes/premiumRoutes')

app.use('/user',signUpRoutes);

app.use('/user',loginRoutes)

app.use('/expense',expenseRoutes)

app.use('/purchase',purchaseRoutes)

app.use('/premium',premiumRoutes)

Expense.belongsTo(User)
User.hasMany(Expense);

Order.belongsTo(User)
User.hasMany(Order);

sequelize.sync({})
.then(()=>{
    app.listen(3000)

}).catch(err=>console.log(err))
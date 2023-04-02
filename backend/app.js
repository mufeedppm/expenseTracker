
require('dotenv').config();
const bodyParser = require('body-parser')

// const https = require('https');

const path = require('path');

const fs = require('fs');

const morgan = require('morgan');

const express = require('express')

const cors = require('cors');

const helmet = require("helmet");



const app = express();

const User = require('./models/userModel')
const Expense = require('./models/expenseModel')
const Order = require('./models/orderModel')
const ForgotPass =require('./models/forgotPassModel')
const History =require('./models/reportModel')

// const privateKey= fs.readFileSync('-server.key');
// const certificate = fs.readFileSync('server.cert');


const logStream = fs.createWriteStream(
    path.join(__dirname,'access.log'),
    {flags:'a'}
    );

app.use(helmet());
app.use(morgan('combined',{stream:logStream}))
app.use(cors());

app.use(bodyParser.json({extended: false}))

const sequelize = require('./database');

const signUpRoutes = require('./routes/signUpRoutes')

const loginRoutes =  require('./routes/loginRoutes')

const expenseRoutes = require('./routes/expenseRoutes')

const purchaseRoutes = require('./routes/purchaseRoutes')

const premiumRoutes = require('./routes/premiumRoutes')

const forgotPassRoutes = require('./routes/forgotPassRoutes');



app.use('/user',signUpRoutes);

app.use('/user',loginRoutes)

app.use('/expense',expenseRoutes)

app.use('/purchase',purchaseRoutes)

app.use('/premium',premiumRoutes)

app.use('/password',forgotPassRoutes)

Expense.belongsTo(User)
User.hasMany(Expense);

Order.belongsTo(User)
User.hasMany(Order);

ForgotPass.belongsTo(User)
User.hasMany(ForgotPass);

History.belongsTo(User)
User.hasMany(History);

sequelize.sync()
.then(()=>{
    // https
    // .createServer({key:privateKey,cert:certificate},app).listen(process.env.PORT || 3000)
    app.listen(process.env.PORT || 3000)

}).catch(err=>console.log(err))
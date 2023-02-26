const bodyParser = require('body-parser')

const express = require('express')

const cors = require('cors')

const app = express();

app.use(cors());

app.use(bodyParser.json({extended: false}))

const sequelize = require('./database');

const signUpRoutes = require('./routes/signUpRoutes')

const loginRoutes =  require('./routes/loginRoutes')

app.use('/user',signUpRoutes);

app.use('/user',loginRoutes)

sequelize.sync()
.then(()=>{
    app.listen(3000)

}).catch(err=>console.log(err))
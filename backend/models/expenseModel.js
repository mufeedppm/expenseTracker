const Sequelize = require('sequelize');

const sequelize = require('../database');

const Expense = sequelize.define('expense',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    item:{
        type: Sequelize.STRING
    },
    expense:{
        type: Sequelize.INTEGER,
    },
    category: Sequelize.STRING,
    description: Sequelize.STRING

})

module.exports = Expense;
const Sequelize = require('sequelize');

const sequelize = require('../database');



const History = sequelize.define('history',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    url:{
        type: Sequelize.STRING
    } ,
    
})

module.exports = History;
const Sequelize = require('sequelize');

const sequelize = require('../database');



const Forgot = sequelize.define('forgot',{
    id:{
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    isActive:{
        type: Sequelize.BOOLEAN
    } ,
    
})

module.exports = Forgot;
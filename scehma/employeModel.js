const { DataTypes} = require("sequelize");
const sequelize = require("../connection");
const Posts = require("./model");

  const Emp = sequelize.define(
    "EMPLOYEE",{
  name: {
    type:DataTypes.STRING
  },
  gender:{
    type:DataTypes.STRING
  },
  age:{
    type:DataTypes.INTEGER
  },
    },
    {
      timestamps:false,

    }
  
  );


  module.exports = Emp;



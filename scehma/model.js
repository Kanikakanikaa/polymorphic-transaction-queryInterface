const { DataTypes} = require("sequelize");
const sequelize = require("../connection");
const Users = require('./userModel')


  const Posts = sequelize.define(
    "POSTS",
    {
      title:{
        type:DataTypes.STRING 
      },
  tableType: {
    type:DataTypes.STRING
  },
  user_id:{
    type:DataTypes.INTEGER
  },
    },
    {
      timestamps:false,
    }
  
  );
  module.exports = Posts;



const { DataTypes } = require("sequelize");
const sequelize = require("../connection");
const Emp = require("./employeModel");
const Posts = require("./model");

  const Users = sequelize.define(
    "USERS",
    {
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique:true
      },
      age: {
        type: DataTypes.INTEGER,
      },
    },
    {
      updatedAt: false,

    }
  );

  Users.hasMany(Posts, { foreignKey: 'user_id' ,constraints:false});
Posts.belongsTo(Users, { foreignKey: 'user_id' ,constraints:false});

  //one to many polymorphic
  
  // Users.hasMany(Posts,{foreignKey:"user_id",constraints:false,scope:{
  
  //     tableType:"user"
    
  // }});
  // Emp.hasMany(Posts,{foreignKey:"user_id",constraints:false,scope:{

  //     tableType:"emp"
    
  // }});
  // Posts.belongsTo(Users,{foreignKey:"user_id",constraints:false, as:"userInfo"})
  // Posts.belongsTo(Emp,{foreignKey:"user_id",constraints:false})
  


  
module.exports = Users;


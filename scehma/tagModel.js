const { DataTypes } = require("sequelize");
const sequelize = require("../connection");
const Emp = require("./employeModel");
const Posts = require("./model");
const Users = require("./userModel");

const Tags = sequelize.define("TAG", {
  tagId:DataTypes.INTEGER,
  tableType: DataTypes.STRING,
  taggableId:DataTypes.INTEGER
});
//many to many polymorphic
Users.belongsToMany(Posts, { through: Tags, scope: {tableType: 'user',},foreignKey: 'taggableId',constraints: false });
Emp.belongsToMany(Posts, { through: Tags , scope: {tableType: 'emp',},foreignKey: 'taggableId',constraints: false });
Posts.belongsToMany(Users, { through: Tags,foreignKey: 'tagId',constraints: false });
Posts.belongsToMany(Emp, { through: Tags ,foreignKey: 'tagId',constraints: false });



module.exports = Tags;

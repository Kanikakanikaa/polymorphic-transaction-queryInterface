const { DataTypes } = require("sequelize");
const sequelize = require("../connection")



const queryInterface = sequelize.getQueryInterface();
const QueryInterface = async (req, res) => {

  // create Table
      const data = await queryInterface.createTable("Quries",{
          name: DataTypes.STRING,
          comment:DataTypes.STRING
      });

      //add coloumns in table

    queryInterface.addColumn("Quries","roll_no",{ type: DataTypes.INTEGER});

   //change column type
    queryInterface.changeColumn("Quries","roll_no",{ type: DataTypes.FLOAT});
 
    //remove column
    queryInterface.removeColumn("Quries","name",{});
  
    let response = {
      data: "addColums",
    };
    return response;
  };
  module.exports = {QueryInterface };
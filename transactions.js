const sequelize = require("./connection");
const Users = require("./scehma/userModel");



//to save all otherwise return all
const transactions = async (req, res) => {
    console.log("transactions call");
    const t= await sequelize.transaction();

    try {
        const data = await Users.create({
            name: "kanika",
            email:"kanika@antiersolutions.com",
            age: 14,
      
          },{
           transaction:t
          });
        //   const data = await Users.destroy({
        //     where:{
        //         email:"kanika@antiersolutions.com",
        //     }
        //   },{
          
         await  t.commit();
          console.log("commit")
    } catch (error) {
        await t.rollback()
        console.log("rollback")
    }
  
  
    let response = {
      data: "data",
    };
    return response;
  };

  const fetchTransaction = async (req, res) => {
    const t= await sequelize.transaction();
    try {
        const data= await Users.findAll({
  lock:true,
  transaction:t
        })

        let response = {
            data: data,
          };
          return response;
        
    } catch (error) {
        await t.rollback()
        console.log("rollback")
    }
  }
  
  module.exports = {transactions,fetchTransaction};
const { Op } = require("sequelize");
const Emp = require("../scehma/employeModel");
const Posts = require("../scehma/model");
const Users = require("../scehma/userModel");

const oneToMany = async (req, res) => {
  console.log("adusercall");

  //userTable
  const data = await Users.findAll({
    include: [
      {
        model: Posts,
      },
    ],
  });
  ///employee table
  const dataEmp = await Emp.findAll({
    include: [
      {
        model: Posts,
      },
    ],
  });
  //post table
  const dataPost = await Posts.findAll({
    include: [Emp, Users],
  });

  let response = {
    data: dataPost,
  };
  return response;
};

const manyToMany = async (req, res) => {
  console.log("manyto many");

  //userTable
  const data = await Users.findAll({
    include: [
      {
        model: Posts,
      },
    ],
  });
  ///employee table
  const dataEmp = await Emp.findAll({
    include: [
      {
        model: Posts,
      },
    ],
  });
  //post table
  const dataPost = await Posts.findAll({
    include: [Emp, Users],
  });

  let response = {
    data: dataPost,
  };
  return response;
};

const lazyLoading = async (req, res) => {
  console.log("lazyLoading");
  //get data one by one
  const data = await Users.findOne({
    where: {
      id: {
        [Op.eq]: 2,
      },
    },
  });
 
//   const postData = await data.getPosts(); // Fetching the posts related to the user
  let response = {
    data: postData,
  };
  return response;
};

  const eagerLoading = async (req, res) => {
  //eager : get all data in on time
  const eager = await Users.findAll({
    include: [Posts],
    where: {
      id: {
        [Op.eq]: 2,
      },
    },
  });
  let response = {
    data: eager,
  };
  return response;
};
module.exports = { oneToMany, manyToMany, lazyLoading,eagerLoading };

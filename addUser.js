const Users = require("./scehma/userModel");
const Posts = require("./scehma/model");
const Tags = require("./scehma/tagModel");
const Employe = require("./scehma/employeModel");

//for add users
const addUsers = async (req, res) => {
  console.log("adusercall");
  const data = await Users.create({
    name: "kk",
    email: "kk@gmail.com",
    age: 6,
  });

  let response = {
    data: data,
  };
  return response;
};

//for add posts
const addPosts = async (req, res) => {
  console.log("adpost call");
  const data = await Posts.create({
 title:"third",
 tableType:"emp",
  user_id:2
  })
  let response = {
    data: data,
  };
  return response;
};
const addTags = async (req, res) => {
  console.log("addTags call");
  const data = await Tags.create({
    tagId:3,
    tableType: "emp",
    taggableId:3
  });

  let response = {
    data: data,
  };
  return response;
};

const addEmploye = async (req, res) => {
  console.log("addEmploye call", Employe);
  const data = await Employe.create({
    name: "ccc",
    age: 14,
    gender: "female",
  });

  let response = {
    data: data,
  };
  return response;
};

module.exports = { addUsers, addPosts, addTags, addEmploye };

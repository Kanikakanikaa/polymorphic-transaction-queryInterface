const express= require("express");
require("./connection")
const app= express();
const port =8081;

const dataAdd=require("./addUser");
const polymorphic=require("./polymorphic/oneToMany")
const transaction=require("./transactions")
const query= require("./queryInterface/queryInterface")

app.get("/",function(req,resp){
    resp.send("home1")
});
app.get("/addPost",async (req, res, next) => {
 const dataPosts = await dataAdd.addPosts();
   res.send(JSON.stringify(dataPosts))
});
app.get("/addTags",async (req, res, next) => {
    const dataPosts = await dataAdd.addTags();
      res.send(JSON.stringify(dataPosts))
   });

app.get("/addUser", async (req, res, next) => {
    const data = await dataAdd.addUsers();
   res.send(JSON.stringify(data))
});

app.get("/addEmploye", async (req, res, next) => {
    const data = await dataAdd.addEmploye();
   res.send(JSON.stringify(data))
});
app.get("/oneToMany", async (req, res, next) => {
    const data = await polymorphic.oneToMany();
   res.send(JSON.stringify(data))
});
app.get("/manyToMany", async (req, res, next) => {
    const data = await polymorphic.manyToMany();
   res.send(JSON.stringify(data))
});
app.get("/lazyLoading", async (req, res, next) => {
    const data = await polymorphic.lazyLoading();
   res.send(JSON.stringify(data))
});
app.get("/eagerLoading", async (req, res, next) => {
    const data = await polymorphic.eagerLoading();
   res.send(JSON.stringify(data))
});

app.get("/transaction", async (req, res, next) => {
    const data = await transaction.transactions();
   res.send(JSON.stringify(data))
});
app.get("/fetchTransaction", async (req, res, next) => {
    const data = await transaction.fetchTransaction();
   res.send(JSON.stringify(data))
});

app.get("/query", async (req, res, next) => {
    const data = await query.QueryInterface();
   res.send(JSON.stringify(data))
});
app.listen(port,()=>{
    console.log(`App is running at port ${port}`)
})
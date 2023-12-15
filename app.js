

const express = require('express');
const app = express();
const users = [
    {id:1, name:'Xedice'},
    {id:2, name:'Nermin'},
    {id:3, name:'Sona'},
    {id:4, name:'Nicat'},
    {id:5, name:'Elisefa'},
]
app.get('/', (req,res)=>{

    res.send("home page")
})

app.get('/users', (req,res)=>{
   
    res.send(users)
})
app.get('/users/:id', (req,res)=>{
    const userID = req.params.id;
    const selectedUser = users.find(user=>user.id == userID)
    // console.log(userID); 
    if(selectedUser){

        res.send(selectedUser)
    }else{
        res.status(404).send('istifadeci yoxdur')
    }
})

app.listen(4000, ()=>{
    console.log("server quruldu");
})
  

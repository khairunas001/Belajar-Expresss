const route = require('express').Router()

route.get('/', (req, res) => {
  res.send('Hello World!')
})

const todoRoutes = require ('./todo.js');
route.use('/todos',todoRoutes);


route.get('/items', (req,res) =>{
    res.send("item utama");
})

module.exports=route;
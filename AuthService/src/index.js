const express = require('express');
const bodyParser=require('body-parser');
const {PORT}= require('./config/serverConfig');
const ApiRoutes = require('./routes/index.js');
const app= express();
const db =require('./models/index');
const prepareAndStartServer=()=>{

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT,async()=>{
        console.log(`Server Started on Port: ${PORT}`);
        if(process.env.DB_SYNC){
                db.sequelize.sync({
                    alter:true
                });
        }
    });
}
prepareAndStartServer();

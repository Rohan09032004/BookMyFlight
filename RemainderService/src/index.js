const express = require('express');
const bodyParser = require('body-parser');

const cron =require('node-cron');

const {PORT} = require('./config/serverConfig');
const { createChannel, subscribeMessage } = require('./utils/messageQueue');
const { REMINDER_BINDING_KEY } =require('./config/serverConfig');

const TicketController = require('./controllers/ticket-controller');

const EmailService = require('./services/email-service');


const jobs = require('./utils/job');

const setUpAndStartServer = async () =>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/v1/tickets',TicketController.create);

    const channel =await createChannel();
    await subscribeMessage(channel, EmailService.SubscribeEvents , REMINDER_BINDING_KEY);


    app.listen(PORT, ()=>{
        console.log(`Server started at Port ${PORT}`);
        //jobs();

    });
}

setUpAndStartServer();
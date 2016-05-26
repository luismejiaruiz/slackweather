var restify = require('restify');
var builder = require('botbuilder');

var myAppId = process.env.MY_APP_ID; 
var myAppSecret = process.env.MY_APP_SECRET; 

// Create bot and add dialogs
var bot = new builder.BotConnectorBot({ appId: process.env.MY_APP_ID, appSecret: process.env.MY_APP_SECRET });
bot.add('/', function (session) {
    session.send('Hello World');
});

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url); 
});
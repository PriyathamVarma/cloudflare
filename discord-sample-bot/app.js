// This file is the main file for creating the discord bot

// STEP 1: Importing the required modules
// Importing the discord.js module
const Discord = require('discord.js');

// Importing the dotenv module
require('dotenv').config();

// STEP 2: Creating the discord bot
// create the bot coding for replying to the commands
const client = new Discord.Client({ 
    intents: [ Discord.GatewayIntentBits.Guilds, 
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
    ],
    partials:[
        Discord.Partials.Message,
        Discord.Partials.Channel,
        Discord.Partials.GuildMember,
        Discord.Partials.User,
        Discord.Partials.GuildScheduledEvent
    ]

});

// STEP 3: Creating the event listeners

// Ready event captures the state when the bot is ready to start online
client.on('ready', (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
});// go to the docs for more info on the ready event

// This event will run on every single message received, from any channel or DM.

client.on('messageCreate', async (message) => {
    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if (!message.author.bot){
        // If the message is "ping",
        const userInputText = message.content.toLowerCase();
        // switch statement
        switch(userInputText){
            case 'hai':
                message.channel.send('hello there!!!');
                break;

            case '!help':
                message.channel.send('What type of help do you need?');   
                
        }
    };
});

    // Also good practice to ignore any message that does not start with our prefix,
    // which is set in the configuration file.

// STEP 4: Logging in the bot
// Logs in the discord bot with the given password
client.login(process.env.TOKEN);




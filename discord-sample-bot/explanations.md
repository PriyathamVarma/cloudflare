```

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
        if (userInputText.includes('ping')) {
            // send "pong" to the same channel.
            message.channel.send('pong');
        }
    };
});

    // Also good practice to ignore any message that does not start with our prefix,
    // which is set in the configuration file.

// STEP 4: Logging in the bot
// Logs in the discord bot with the given password
client.login(process.env.TOKEN);



```

## Explanation

### Discord Bot Creation Script
**Step 1: Importing the required modules**

```
const Discord = require('discord.js');
require('dotenv').config();

```

In this step, the script imports the necessary modules, including the discord.js module and the dotenv module which is used to load environment variables from a .env file.

**Step 2: Creating the discord bot**

```
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

```

A new Discord.Client is created using the new Discord.Client() constructor. This client is configured with intents and partials which are used to specify the features of the bot. Intents are used to specify which features the bot is allowed to access and the partials are used to specify the features of the bot which can be partially cached.

**Step 3: Creating the event listeners**

```

client.on('ready', (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if (!message.author.bot){
        // If the message is "ping",
        if (message.content.includes('ping')) {
            // send "pong" to the same channel.
            message.channel.send('pong');
        }
    };
});


```

In this step, the script sets up event listeners for the 'ready' and 'messageCreate' events. The ready event captures the state when the bot is ready to start online and logs in as the client user and will log a message to the console. The messageCreate event captures every single message received from any channel or DM, and runs a function that you can define in it. In this case, the function looks for the word "ping" in the message, and if it finds it, it sends the message "pong" in the same channel.

**Step 4: Logging in the bot**

```

client.login(process.env.TOKEN);


```

Finally, the bot logs in to Discord using the client.login() method and passing in the token as a parameter. This token is stored in the environment variable TOKEN which is loaded using the dotenv module.

This script is the main file for creating a discord bot. It sets up the client, event listeners, and logs into Discord using the token stored in the environment variable. This code can be used as a starting point for creating a basic Discord bot, but additional functionality will need to be added to make it useful.





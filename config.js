const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Xzxh3ZQC#A3WBJ7mjbfefjm8zOo93GJ-XPnKQAJMPIUBRVaMNaKY",
  // add your Session Id 
PREFIX: process.env.PREFIX || ".",
  // add your prifix for bot
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/hzagwo.jpg",
  // add img for alive msg
SUDO_NB: process.env.SUDO_NB || "",
  // add your sudo number like 92314xxxxxx
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
  // add your mongodb
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  // make true or false status auto seen
MODE: process.env.MODE || "public",
  // make bot public or private 
AUTO_VOICE: "false"
  // make auto voice false or true
};

const discord = require("discord.js")
const client = new discord.Client()

client.on("ready" , () => {
  console.log("I am online")
})

client.on("message" , message => {
  if(message.content === "!ping"){
    return message.channel.send("Pong!")
  }
  if(message.content === "!beep"){
    return message.channel.send("Bap!")
  }
}) //Just 2 simple commands and simple code

client.login(process.env.TOKEN) //We are using environment files because it's the kost secure way to keep your token from getting leaked.
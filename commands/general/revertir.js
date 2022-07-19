const Discord = require("discord.js");
const { Client, MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = { 
    name: "revertir",
    description: "revierte un texto",
    async execute(client, message, args, discord) {

        if(!args[0]) return message.channel.send("¡Debes escribir un texto para revertirlo!")

      const revertir = args.join(' ').split('').reverse().join('')
      return message.channel.messages
      .fetch({ limit: 1})
      .then((messages) => {
        message.channel.bulkDelete(messages);message.channel
        .send(`${revertir}`);
      })
    }
}
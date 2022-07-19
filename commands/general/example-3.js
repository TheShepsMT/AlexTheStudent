const Discord = require('discord.js');

module.exports = {
    name: "games",
    description: "games",
    async execute(client, message, reaction, user, args, discord) {
        let [react1, react2, react3, react4, react5] = ["905164894893113384", "915463283329339423", "905165296061538374", "905165720571215883", "905166238379044915"]

        message.channel.send("Juegos Buenardos").then(async msg => { 
            await msg.react(`${react1}`), await msg.react(`${react2}`),  await msg.react(`${react3}`),  await msg.react(`${react4}`),  await msg.react(`${react5}`)
        
        })
      }
    };
  


  
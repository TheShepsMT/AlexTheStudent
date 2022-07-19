module.exports = {
    name: "erase",
    aliases: ["era", "dt"],
    description: "Borra una cierta cantidad de mensajes",
    roles: ["884813378047053885"],

    async execute(client, message, args, discord) {
    
      let us = message.guild.members.cache.find((u) => u.id == message.author.id);
      let perm = us.roles.cache.find((r) => r.id == this.roles);

      if (!perm) {
        return message.channel
          .send(`*** but nobody came.**`)
          .then((m) => {
            setTimeout(() => {
              message.delete();
              m.delete();
            }, 6000);
          });
      }

      if (!args[0]) return message.reply("**Right. You are a great partner.**");
      if (isNaN(args[0])) return message.reply("**SINCE WHEN WERE YOU THE ONE IN CONTROL?**");
      if (args[0] > 100) return message.reply("*** Determination.**");
      if (args[0] < 1) return message.reply(`*** ${parseFloat(args[0]) * -1} left.**`);
  
      await message.channel.messages
        .fetch({ limit: args[0] })
        .then((messages) => {
          message.channel.bulkDelete(messages);
        });
    },
  };
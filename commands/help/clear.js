module.exports = {
    name: "clear",
    aliases: ["del", "catmc", "limpiar"],
    description: "Borra una cierta cantidad de mensajes",
    roles: ["903373395826204754", "847177597518348349"],

    async execute(client, message, args, discord) {
    
      let us = message.guild.members.cache.find((u) => u.id == message.author.id);
      let perm = us.roles.cache.find((r) => r.id == this.roles);

      if (!perm) {
        return message.channel
          .send(`${message.author} No tienes permisos para usar este comando.`)
          .then((m) => {
            setTimeout(() => {
              message.delete();
              m.delete();
            }, 6000);
          });
      }

      if (!args[0]) return message.reply("Por favor, ingresa numero de mensajes a borrar");
      if (isNaN(args[0])) return message.reply("Por favor, ingresa un numero");
      if (args[0] > 100) return message.reply("Por favor, debe ser un numero menor a 100");
      if (args[0] < 1) return message.reply("Por favor, debe ser un numero mayor a 0");
  
      await message.channel.messages
        .fetch({ limit: args[0] })
        .then((messages) => {
          message.channel.bulkDelete(messages);
        });
    },
 }; 
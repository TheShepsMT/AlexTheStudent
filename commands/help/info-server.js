module.exports = {
    name: "info-server",
    aliases: ["server-info"],
    description: "Información del server",
    async execute(client, message, args, discord) {
      message.reply(`Nombre del server: ${message.guild.name}\nMiembros Totales: ${message.guild.memberCount}`);
    },
  };
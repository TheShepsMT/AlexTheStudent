module.exports = {
    name: "info-user",
    aliases: ["user-info", "user", "usuario"],
    description: "Información del usuario",
    async execute(client, message, args, discord) {
      message.reply(`Tu Tag: ${message.author.tag}\nTu Id: ${message.author.id}`);
    },
  };
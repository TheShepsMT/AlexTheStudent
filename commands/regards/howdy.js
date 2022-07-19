module.exports = {
    name: "howdy",
    aliases: ["hola", "holitas"],
    description: "Howdy, my name is Alex-Bot!",
    async execute(client, message, args, discord) {
      message.reply("Howdy!");
    },
  };
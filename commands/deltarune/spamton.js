module.exports = {
    name: "spamton",
    description: "Acerca de Spamton G. Sapamton",
    async execute(client, message, args, discord) {
        const spamton = new discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Spamton Critic")
        .setURL("https://youtu.be/zVEyyTgQBa8")
        .setAuthor(
          "Spamton G. Spamton" /*Autor*/,
          "https://pbs.twimg.com/media/FAESs0wUYAI8tMF.jpg" /* Icono*/,
          "https://youtu.be/zVEyyTgQBa8" /* URL */
         )
        .setDescription("When all your [[SALES GONE DOWN THE DRAIN!!!!!!!]]")
        .setImage("https://i.redd.it/zma7mi3f09s71.png")
        .setTimestamp()
        .setFooter("HEY  EVERY   ! IT'S ME!", "https://pbs.twimg.com/media/FAESs0wUYAI8tMF.jpg");
        
        message.reply({ embeds: [spamton] });
    },
  };
  
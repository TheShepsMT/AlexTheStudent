module.exports = {
    name: "help",
    aliases: ["ayuda"],
    description: "Comandos Generales",
    async execute(client, message, args, discord) {
       const instrucalc = new discord.MessageEmbed()
       .setColor([23, 22, 72])
       .setTitle(`Comandos de ${client.user.username}`
        )
       .setDescription("Estos son los Comandos Generales:"
        )
        .addFields(
          {
            name: "*info-calc",
            value: "Muestra la lista de comandos de la calculadora",
          },
          {
            name: "*ping",
            value: "Muestra mi Latencia",
          },
          {
            name: "*libros",
            value: "Muestra los libros actuales que se están usando en TSC",
          },
          {
            name: "*reglas",
            value: "Muestra las reglas del servidor",
          },
        )
       .setFooter("Comandos Generales | *help", "https://cdn.discordapp.com/attachments/765947576721473576/898229075120906320/1d3785da3c1ca0f7c6646201ac4667a3.png");
  
        message.reply({ embeds: [instrucalc] });
    },
};
module.exports = {
    name: "info-calc",
    description: "Muestra la lista de comandos de la calculadora",
    async execute(client, message, args, discord) {
        const infocalc = new discord.MessageEmbed()
      .setColor([0, 0, 139])
      .setTitle(`Intrucciones`
       )
      .setDescription("Estos son los Comandos de la Calculadora:"
       )
      .addFields(
        {
          name: "*suma <número 1> <número 2> ",
          value: "Suma, por ahora, solo 2 términos",
        },
        {
          name: "*resta <número 1> <número 2>",
          value: "Resta, por ahora, solo 2 términos",
        },
        {
          name: "*multiplica <número 1> <número 2>",
          value: "Multiplica, por ahora, solo 2 términos",
        },
        {
          name: "*divide <número 1> <número 2>",
          value: "Divide, por ahora, solo 2 términos",
        },
      )
      .setFooter("Instrucciones de la Calculadora | *info-calc", "https://cdn.discordapp.com/attachments/765947576721473576/898229075120906320/1d3785da3c1ca0f7c6646201ac4667a3.png");
     
      message.channel.send({ embeds: [infocalc] });
    },
};
  
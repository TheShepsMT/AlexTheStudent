module.exports = {
    name: "suma",
    description: "Realiza una suma",
    async execute(client, message, args, discord) {
        const suma = new discord.MessageEmbed()
        .setColor([0, 0, 139])
       .setTitle("Calculadora:"
        )
       .setDescription(`${parseFloat(args[0])} + ${parseFloat(args[1])} = ${
         parseFloat(args[0]) + parseFloat(args[1])
         }`
        )
        message.reply({ embeds: [suma] });
    },
  };
  
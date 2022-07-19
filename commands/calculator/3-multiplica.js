module.exports = {
    name: "multiplica",
    description: "Realiza una multiplicación",
    async execute(client, message, args, discord) {
        const multiplica = new discord.MessageEmbed()
        .setColor([0, 0, 139])
       .setTitle("Calculadora:"
        )
       .setDescription(`${parseFloat(args[0])} x ${parseFloat(args[1])} = ${
         parseFloat(args[0]) * parseFloat(args[1])
         }`
        )
        message.reply({ embeds: [multiplica] });
    },
};
  
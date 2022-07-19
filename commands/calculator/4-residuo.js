module.exports = {
    name: "residuo",
    description: "Halla el residuo de una división",
    async execute(client, message, args, discord) {
        const residuo = new discord.MessageEmbed()
        .setColor([0, 0, 139])
       .setTitle("Calculadora:"
        )
       .setDescription(`El residuo de ${parseFloat(args[0])} entre ${parseFloat(args[1])} es ${
         parseFloat(args[0]) % parseFloat(args[1])
         }`
        )
        message.reply({ embeds: [residuo] });
    },
};
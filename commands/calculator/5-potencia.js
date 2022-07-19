module.exports = {
    name: "eleva",
    description: "Realiza una potenciación",
    async execute(client, message, args, discord) {
        const eleva = new discord.MessageEmbed()
        .setColor([0, 0, 139])
       .setTitle("Calculadora:"
        )
       .setDescription(`${parseFloat(args[0])} ^ ${parseFloat(args[1])} = ${
         parseFloat(args[0]) ** parseFloat(args[1])
         }`
        )
        message.reply({ embeds: [eleva] });
    },
};
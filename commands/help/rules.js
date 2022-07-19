module.exports = {
    name: "reglas",
    aliases: ["rules", "regla"],
    description: "Las reglas de TSC",

    async execute(client, message, args, discord) {
       const reglas = new discord.MessageEmbed()
       .setColor([0, 0, 139])
       .setTitle("#𝓡𝓔𝓖𝓛𝓐𝓢")
       .setAuthor(
         "Alex-Bot" /*Autor*/,
         "https://cdn.discordapp.com/attachments/765947576721473576/890716035588698122/perfil.png" /* Icono*/,
         "https://discord.com/channels/815934049725710376/878795266206081064" /* URL */
        )
       .setDescription("\nEstas son las Reglas, por favor lee atentamente y cumple con todas las reglas para no recibir sanciones y mejorar esta comunidad.\n\nRecuerda:\n\n➤ Cada cosa donde pertenece.\n\n➤ El respeto mutuo. No se tolerará ningún acto de discriminación, burla, desprecio o bullying hacia una persona o un grupo de personas.\n\n➤ No se permite el SPAM, la AUTOPROMOCIÓN O el FLOOD (invitaciones al servidor, anuncios, etc.) sin permiso de un miembro del personal. Esto también incluye mandar MD a otros miembros, y la biografía del usuario, así mismo como el estado personalizado.\n\n➤ No usar los bots o comandos en canales que no correspondan.\n\n➤ Intenta no equivocarte en escribir en los mensajes, pueden ser usados en tu contra (sé especifico).\n\n➤ En caso de ser baneado y querer poner en revisión tu caso tener alguna queja, decir a los administradores.")
       .setFooter("Reglas del servidor | *reglas", "https://cdn.discordapp.com/attachments/765947576721473576/898229075120906320/1d3785da3c1ca0f7c6646201ac4667a3.png");
  
        message.reply({ embeds: [reglas] });
    },
};
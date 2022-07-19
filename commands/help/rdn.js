module.exports = {
    name: "rdn",
    description: "Muestra las reglas y da los roles correspondientes",
    async execute(client, message, args, discord) {
      //% BUTTONS
      const btn1 = new discord.MessageButton()
        .setCustomId("sucs")
        .setLabel("Yo estoy de acuerdo")
        .setStyle("SUCCESS");
      const btn2 = new discord.MessageButton()
        .setCustomId("thk")
        .setLabel("Bueno, déjame pensarlo")
        .setStyle("SECONDARY");
      const btn3 = new discord.MessageButton()
        .setCustomId("dng")
        .setLabel("No, deseo salir del server")
        .setStyle("DANGER");
      //% BUTTONS
  
      //& FILA
  
      const fila = new discord.MessageActionRow().addComponents(btn1, btn2, btn3);
  
      //& FILA
  
      //# MENSAJES
  
      const escoge_pibe = {
        title: "Reglas de Netiqueta",
        description: "\n```Bienvenido, estas son las reglas de nuestro servidor, por favor lee atentamente y cumple con todas las reglas para no recibir sanciones, de paso nos ayudas a mejorar nuestra comunidad, cualquier duda o consulta vaya a Soporte. ```\n\n**Usted se compromete a:**\n\n➤ Fijarse en mandar cada mensaje, archivo, imagen y enlace en sus lugares donde estos correponden.\n➤ Optar por el respeto mutuo. No se tolerará ningún acto de discriminación, burla, desprecio o bullying hacia una persona o un grupo de personas.\n➤ No hacer spam, ni autopromoción, ni flood sin permiso, ni en mandar MD a miembros, ni en su biografía, ni en el estado personalizado.\n➤ No utilizar los comandos de los bots que se encuentren en este servidor en canales que no correspondan a su temática.\n➤ Intentar no equivocarte en escribir sus mensajes, pueden ser usados en tu contra (sé especifico).\n➤ En caso de ser baneado, si usted desea poner en revisión tu caso o tiene alguna queja, avisar a los administradores.",
        color: "BLUE",
        author: {
          name: "La Administración" /*Autor*/,
          icon_url: "https://cdn.discordapp.com/attachments/765947576721473576/903854891192184832/tscs_rules.png"
        },

      };
      
      //# MENSAJES
  
      message.channel.send({ embeds: [escoge_pibe], components: [fila] });
    },
  };
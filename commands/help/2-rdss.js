module.exports = {
    name: "rdss",
    description: "Sexualidad...",
    async execute(client, message, args, discord) {
      //% BUTTONS
      const varon = new discord.MessageButton()
        .setCustomId("varon")
        .setLabel("Varón")
        .setStyle("SECONDARY");
      const mujer = new discord.MessageButton()
        .setCustomId("mujer")
        .setLabel("Mujer")
        .setStyle("SECONDARY");
      const otro = new discord.MessageButton()
        .setCustomId("otro")
        .setLabel("Otro")
        .setStyle("SECONDARY");
      
  
      //& FILA
  
      const fila = new discord.MessageActionRow().addComponents(varon, mujer, otro);
  
      //& FILA
  
      //# MENSAJES
  
      const sexualidad = {
        title: "¿Cómo usted se identifica?",
        color: "BLUE",
      };
      
      //# MENSAJES
  
      message.channel.send({ embeds: [sexualidad], components: [fila] });
    },
  };
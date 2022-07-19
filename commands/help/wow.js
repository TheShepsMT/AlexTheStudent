module.exports = {
    name: "wow",
    description: "¿Desearía tener el rol de WoWClassic?",
    async execute(client, message, args, discord) {
      //% BUTTONS
      const wowc = new discord.MessageButton()
        .setCustomId("wowc")
        .setLabel("Sí")
        .setStyle("SUCCESS");
      const wownt = new discord.MessageButton()
        .setCustomId("wownt")
        .setLabel("No")
        .setStyle("DANGER");
      
  
      //& FILA
  
      const fila = new discord.MessageActionRow().addComponents(wowc, wownt);
  
      //& FILA
  
      //# MENSAJES
  
      const wow = {
        title: "¿Desearía tener el rol de WoWClassic?",
        color: "BLUE",
      };
      
      //# MENSAJES
  
      message.channel.send({ embeds: [wow], components: [fila] });
    },
  };
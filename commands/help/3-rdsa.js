module.exports = {
    name: "rdsa",
    description: "¿En qué salón se encuentra de secundaria?",
    async execute(client, message, args, discord) {
      //% BUTTONS
      const salona = new discord.MessageButton()
        .setCustomId("salona")
        .setLabel("5to A")
        .setStyle("SECONDARY");
      const salonb = new discord.MessageButton()
        .setCustomId("salonb")
        .setLabel("5to B")
        .setStyle("SECONDARY");
      const salonc = new discord.MessageButton()
        .setCustomId("salonc")
        .setLabel("5to C")
        .setStyle("SECONDARY");
      const otro2 = new discord.MessageButton()
        .setCustomId("otro2")
        .setLabel("Otro")
        .setStyle("SECONDARY");
      const e = new discord.MessageButton()
        .setCustomId("favio")
        .setEmoji("893681796695326731")
        .setStyle("DANGER");
  
      //& FILA
  
      const fila = new discord.MessageActionRow().addComponents(salona, salonb, salonc, otro2);
  
      //& FILA
  
      //# MENSAJES
  
      const salon = {
        title: "¿En qué salón de TSC te encuentras?",
        color: "BLUE",                          
      };
      
      //# MENSAJES
  
      message.channel.send({ embeds: [salon], components: [fila] });
    },
  };
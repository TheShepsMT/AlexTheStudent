module.exports = (client, discord, interaction) => {
    //%BUTTONS
  
    if (interaction.isButton()) {
  
      const member = interaction.member;
      const general = member.guild.channels.cache.find( //Canal General//
        (channel) => channel.id === "815934049725710379"
      );
      const opcional1 = member.guild.channels.cache.find( //Canal Opcional//
        (channel) => channel.id === "890290100301348884"
      );
  
      if (interaction.customId === "sucs") {
        interaction.deferReply({ ephemeral: true });
        interaction.followUp({ content: "¡Un gusto tenerte aquí!" });
        let aislado = "903367711348912150";
        member.roles.add(aislado);
        let salvaje = "904159355346255993"
        member.roles.remove(salvaje);
      }
      if (interaction.customId === "thk") {
        interaction.deferReply({ ephemeral: true });
        interaction.followUp({ content: "Tómate tu tiempo" }); 
         //let vip = "885201895751319594";
         //member.roles.remove(vip)
      }
      if (interaction.customId === "dng") {
        interaction.deferReply({ ephemeral: true });
        interaction.followUp({ content: "Espero volverte a ver..." });
        member.kick();
      }
      if (interaction.customId === "varon") {
        interaction.deferReply({ ephemeral: true });
        interaction.followUp({ content: "¡Un gusto conocerlo joven!" });
        let varónid = "904601938400792647";
        member.roles.add(varónid);
      }
      if (interaction.customId === "mujer") {
        interaction.deferReply({ ephemeral: true });
        interaction.followUp({ content: "¡Todo un gusto jovencita!" });
        let mujerid = "854412568600641546";
        member.roles.add(mujerid);
      }
      if (interaction.customId === "otro") {
        interaction.deferReply({ ephemeral: true });
        interaction.followUp({ content: "¡No se preocupe! Respetaremos y trataremos cómo usted desee, para eso recuerde avisar sobre esto a los miembros. " });
        let varonid = "904601938400792647";
        member.roles.remove(varonid);
        let mujerid = "854412568600641546";
        member.roles.remove(mujerid);
      }
      if (interaction.customId === "salona") {
        interaction.deferReply({ ephemeral: true });
        interaction.followUp({ content: "¡Es genial aquí!" });
        let a = "904818765915643974";
        member.roles.add(a);
        let b = "904819025102651423";
        member.roles.remove(b);
        let c = "904819256011669555";
        member.roles.remove(c);
        let compa = "834829592664473630";
        member.roles.add(compa);
        let invitado = "900381061773680640";
        member.roles.remove(invitado);
      }
      if (interaction.customId === "salonb") {
        interaction.deferReply({ ephemeral: true });
        interaction.followUp({ content: "¡Es genial verlo aquí!" });
        let a = "904818765915643974";
        member.roles.remove(a);
        let b = "904819025102651423";
        member.roles.add(b);
        let c = "904819256011669555";
        member.roles.remove(c);
        let compa = "834829592664473630";
        member.roles.add(compa);
        let invitado = "900381061773680640";
        member.roles.remove(invitado);
      }
      if (interaction.customId === "salonc") {
        interaction.deferReply({ ephemeral: true });
        interaction.followUp({ content: "¡Es genial verlo aquí!" });
        let a = "904818765915643974";
        member.roles.remove(a);
        let b = "904819025102651423";
        member.roles.remove(b);
        let c = "904819256011669555";
        member.roles.add(c);
        let compa = "834829592664473630";
        member.roles.add(compa);
        let invitado = "900381061773680640";
        member.roles.remove(invitado);
      }
      if (interaction.customId === "otro2") {
        interaction.deferReply({ ephemeral: true });
        interaction.followUp({ content: "¡Es un placer ver nuevas caras!" });
        let a = "904818765915643974";
        member.roles.remove(a);
        let b = "904819025102651423";
        member.roles.remove(b);
        let c = "904819256011669555";
        member.roles.remove(c);
        let compa = "834829592664473630";
        member.roles.remove(compa);
        let invitado = "900381061773680640";
        member.roles.add(invitado);
      }
      if (interaction.customId === "favio") {
        interaction.deferReply({ ephemeral: true });
        interaction.followUp({ content: "¡Oh me vengo~!" });
      }
      if (interaction.customId === "wowc") {
        interaction.deferReply({ ephemeral: true });
        interaction.followUp({ content: "¡Entendido!" });
        let wowrol = "916373509826031636";
        member.roles.add(wowrol);
      }
      if (interaction.customId === "wownt") {
        interaction.deferReply({ ephemeral: true });
        interaction.followUp({ content: "Si insistes..." });
        let wowrol = "916373509826031636"
        member.roles.remove(wowrol);
      }
    }
      
  
    //%BUTTONS
  };
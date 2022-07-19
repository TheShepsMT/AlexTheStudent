module.exports = {
    name: "libros",
    aliases: ["libro"],
    description: "Link donde se comparte los libros actuales pertenecientes del administrador de TSC",
    async execute(client, message, args, discord) {
        const libros = new discord.MessageEmbed()
        .setColor([0, 0, 139])
        .setTitle("LIBROS - I BIMESTRE - 5TO SECUNDARIA")
        .setURL("https://drive.google.com/drive/folders/1vcRfcDVArVDTM2ecRwtvaBGPAl1Ad_Bv?usp=sharing")
        .setAuthor(
          "Alex-Bot" /*Autor*/,
          "https://cdn.discordapp.com/attachments/765947576721473576/890716035588698122/perfil.png" /* Icono*/,
          "https://drive.google.com/drive/folders/1vcRfcDVArVDTM2ecRwtvaBGPAl1Ad_Bv?usp=sharing" /* URL */
        )
        .setImage("https://cdn.discordapp.com/attachments/861017033439969291/948244026325336084/LIBROS_VS_-_I_BIM_-_5TO_ANO.png")
        .setDescription("Para ver los libros actuales, click en el título de arriba.")
        .setFooter("Libros de TSC | *libros", "https://cdn.discordapp.com/attachments/765947576721473576/898229075120906320/1d3785da3c1ca0f7c6646201ac4667a3.png");
  
       message.reply({ embeds: [libros] });
  },
};
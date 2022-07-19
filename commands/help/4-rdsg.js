//module.exports = {
//  name: "rdr",
//  description: "Muestra una descrición sobre los Roles de TSC.",

//  async execute(client, message, args, discord) {

//     const rds = new discord.MessageEmbed()
//     .setColor("BLUE")
//     .setTitle("Rangos del Servidor")
//     .setAuthor(
//       "La Administración" /*Autor*/,
//       "https://cdn.discordapp.com/attachments/765947576721473576/903854891192184832/tscs_rules.png" /* Icono*/,
//      )
//     .setDescription("```@Creador 
//     Solo es para el creador de este servidor
//     @Delegado SV 
//     Se consigue superando el nivel de xp a un admin con el @MEE6
//     @The One 
//     Se consigue si eres el cerebron de la clase
//     @VIP 
//     Si eres varon invita a 3 chicas del salon al servidor o 5 varones al servidor
//     Si eres chica invita a 3 varones del salon al servidor o 3 chicas al servidor
//     @Server Aliaser 
//     Solo para ayudantes del programador del servidor o puedes crear tu propio bot para el servidor
//     @Esperanza 
//     Se consigue manteniendo esperanza y algo de apoyo dentro del servidor
//     @Mod Memero 
//     Se consigue mandando memes , bromas , etc en el canal de multimedia
//     @Elegidos 
//     Se consigue mandando las clases en el canal respectivo del curso")

//      message.channel.send({ embeds: [rds] });
//  },
//};
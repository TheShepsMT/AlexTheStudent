const star  = require('star-labs');
const db = require('megadb')

module.exports = {
    name: "kill",
    description: "kill",
    async execute(client, message, args, discord) {
    let user1 = message.author
    let user2 = message.mentions.users.first()

// MegaDB
let muertes = new db.crearDB("Muertes")
let muertestiene = await muertes.obtener(`${message.guild.id}_${user2.id}`); 

if(!muertes.tiene(`${message.guild.id}_${user2.id}`)) { 
  muertes.establecer(`${message.guild.id}_${user2.id}`, 0);}

muertes.sumar(`${message.guild.id}_${user2.id}`, 1);

// MegaDB
  const embed = new discord.MessageEmbed()
    .setDescription(`${user1.tag} asesinó a ${user2.tag}\n${user2.tag} ha muerto ${muertestiene} veces.`)
    .setImage(star.kill())
    .setTimestamp()
    .setFooter(`=)`)
    .setColor("RANDOM")

  message.channel.send({ embeds: [embed] });
    },
  };
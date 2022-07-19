const star  = require('star-labs');
const db = require('megadb')

module.exports = {
    name: "hug",
    aliases: [],
    description: "",
    async execute(client, message, args, discord) {
let user1 = message.author

  let user2 = message.mentions.users.first()

// MegaDB
let abrazos = new db.crearDB("Abrazos")
let abrazostiene = await abrazos.obtener(`${message.guild.id}_${user2.id}`); 

if(!abrazos.tiene(`${message.guild.id}_${user2.id}`)) { 
  abrazos.establecer(`${message.guild.id}_${user2.id}`, 0);}

abrazos.sumar(`${message.guild.id}_${user2.id}`, 1);

// MegaDB
  const embed = new discord.MessageEmbed()
    .setDescription(`${user1.tag} abrazó a ${user2.tag}\n${user2.tag} le han dado ${abrazostiene} abrazos :)`)

    .setImage(star.hug())

    .setTimestamp()
.setFooter(`XD`)

  message.channel.send({ embeds: [embed] });
    },
  };
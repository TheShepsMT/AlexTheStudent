const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "msg",
  alias: [],
  description: "Envia un mensaje a un usuario",

  async execute (client, message, args){
    message.delete()

const user = message.mentions.members.first()
if(!user) return message.reply('**Menciona a quien quieres enviar el mensaje**')


let hola = args.slice(1).join(" ")

if(!hola){
  hola = "SMS Vacio"
}

const embed = new MessageEmbed()
.setTitle('Buzon de SMS')
.setColor([255, 106, 77])
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setDescription('**Te ha llegado un nuevo mensaje:**\n' + hola + '')

if(user.bot) return message.reply('**No puedes mandar mensajes a Bots**')

user.send({ embeds: [embed] }).catch(error => {
  console.log(`${error}`)
  message.channel.send({ content: `${error}` })
})
}

} 

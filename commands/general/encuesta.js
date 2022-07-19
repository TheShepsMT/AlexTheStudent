const Discord = require('discord.js');

module.exports = {
    name: "encuesta",
    description: "encuesta",
    async execute(client, message, args, discord) {

  const test = args.join(" ").split(", "); //Definimos test como un argumento, usamos un .split(" | ") para tener sepasada la pregunta de las opciones
  const [pregunta, opcion1, opcion2] = test; //Definimos que "Pregunta, opcion1, opcion2" equivale a test, el .split de test fue para separar estas definiciones
  
  let [react1, react2] = ["1️⃣", "2️⃣"] // Definimos que react1 y react2 equivalen a los emojis "1??", "2??"
  //Puedes cambiar los emojis que definimos como react1 y react2, si deseas poner un emoji de tu servidor solo pon la id del emoji.


  if(!pregunta) return message.channel.send("Ingrese una pregunta") //Si no escribe la pregunta de la encuesta enviara este mensaje

  if(!opcion1) return message.channel.send("Necesitas ingresar dos opciones") //Si no escribe lo que significa la primera opcion retorna esto

  if(!opcion2) return message.channel.send("Necesitas ingresar dos opciones") //Si no escribe lo que significa la segunda opcion retorna esto



    
const encuesta = new Discord.MessageEmbed() //Creamos el embed con el nombre encuesta

.setTitle(`:bar_chart: ${pregunta} \n`)
.addField(`${react1} ${opcion1}`, "> ` `")
.addField(`${react2} ${opcion2}`, "> ` `")
.setFooter(`Encuesta realizada por ${message.author.tag}`)
.setColor("BLUE")

  message.channel.send({embeds: [encuesta]}).then(async msg => { //Enviamos el embed llamado encuesta
   
      await msg.react(`${react1}`), await msg.react(`${react2}`) //añadimos las reacciones al embed enviado
  
  })
}}
   

//Recuerda no c&p
//Si haces c&p deja tu like. :)

//Si tienes dudas/sugerencias puedes escribirme a mi Discord EsteName_#9853

//Actualización del 11-10-2021
//
// (+) Se agrega un comentario para enviar el embed en v13. (Algo bastante básico)
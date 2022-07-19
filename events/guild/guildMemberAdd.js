//%PAQUETES
const { createCanvas, loadImage } = require("canvas");
const { join } = require("path");
//%PAQUETES

//& MODELOS
const userModel = require("../../models/userSchema");
//& MODELOS

module.exports = async (client, discord, member) => {
  //& REGISTRAR USUARIO

  try {
    let user = await userModel.create({
      userID: member.id,
      userName: member.displayName,
      serverID: member.guild.id,
    });
    user.save();
  } catch (error) {
    console.log(error);
  }

  //& REGISTRAR USUARIO

  //%CANVAS

  const canvas = createCanvas(1138, 754); //Tamaño de nuestra imagen
  const ctx = canvas.getContext("2d");

  const background = await loadImage(join(__dirname, "../../img", "tsc.png")); //Imagen de fondo

  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#000000";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  const name = member.user.username;

  if (name.length == 2) {
    ctx.font = "bold 100px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 222, canvas.height / 2 + 197);
  }

  if (name.length == 3) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 197);
  }

  if (name.length == 4) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 5) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 6) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 7) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 8) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }  

  if (name.length == 9) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }
  if (name.length == 10) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 11) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 12) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 13) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 14) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 15) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 16) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 17) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 18) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 19) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 20) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 21) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 22) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 23) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 24) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 25) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 26) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 27) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 28) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 29) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 30) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 31) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  if (name.length == 32) {
    ctx.font = "bold 130px Sans";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, canvas.width / 4 + 100, canvas.height / 2 + 200);
  }

  ctx.beginPath();
  ctx.arc(570, canvas.height / 3 + 128, 101, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  const avatar = await loadImage(
    member.user.displayAvatarURL({ format: "png" })
  );

  ctx.drawImage(avatar, 468, canvas.height / 3 + 27, 205, 205);

  const imagen = new discord.MessageAttachment(canvas.toBuffer(), "img.png");

  //& ROL
  const guild = member.guild;
  const aislados = guild.roles.cache.find((role) => role.name === "Salvaje");
  member.roles.add(aislados);
 
  //& ROL

  //%CANVAS

  const general = member.guild.channels.cache.find( //Canal General//
    (channel) => channel.id === "815934049725710379"

  );
  const opcional1 = member.guild.channels.cache.find( //Canal Opcional//
    (channel) => channel.id === "890290100301348884"
  );

  const reglas = member.guild.channels.cache.find( //ID CANAL REGLAS//
    (channel) => channel.id === "878795266206081064"
  );

  const me = new discord.MessageEmbed()
    .setColor([166, 103, 244])
    .setTitle("¡Bienvenid@!")
    .setDescription(`Lee las reglas en ${reglas}`)
    .setImage("attachment://img.png")
    .setTimestamp()
    .setFooter(member.guild.name);

  general.send({ embeds: [me], files: [imagen] });
  opcional1.send({ embeds: [me], files: [imagen] });

};
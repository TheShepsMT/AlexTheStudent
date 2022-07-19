//!discord, client, env!//

require("dotenv").config();

const discord = require("discord.js");
const client = new discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

//!Mongo!//

const mongoose = require("mongoose");
const mg = process.env.DB;

mongoose
  .connect(mg, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a MongoDB");
    console.log("--------------------- LOGS DEL BOT ---------------------");
  })
  .catch((e) => {
    console.log(e);
  });

  // console.log(`---------------------- DETALLES ----------------------\n`);
  
//!Mongo!//

//!CÓDIGO!//

client.commands = new discord.Collection();
client.events = new discord.Collection();
client.slash = new discord.Collection();

//*Slashs Commands*//

let Scommad = [
  {
    name: "ping",
    description: "Muestra mi Latencia",
    run: async (client, interaction, args) => {
      await interaction.followUp({ content: `Ping: ${client.ws.ping} ms` });
    },
  },
  {
    name: "esperanza",
    description: "Aún no es la hora, sin embargo...",
    run: async (client, interaction, args) => {
      await interaction.followUp({ content: `¡Manténte Esperanzado!` });
    },
  },
];

client.slash = new discord.Collection();

client.once("ready", async () => {

client.slash.set(Scommad[0].name, Scommad[0]);
client.slash.set(Scommad[1].name, Scommad[1]);

await client.application.commands.set(Scommad);
});

client.on("interactionCreate", async (interaction) => {
if (interaction.isCommand()) {
  await interaction.deferReply({ ephemeral: false }).catch((obj) => {
    console.log(obj);
  });

  console.log(client.slash.get(interaction.commandName));

  const command = client.slash.get(interaction.commandName);

  if (!command)
    return interaction.followUp({ content: "Comando no registrado :/" });

  const args = [];

  try {
    command.run(client, interaction, args);
  } catch (error) {
    console.log(error);
  }
}
});

["commandHandler", "eventHandler", "slashHandler"].forEach((file) => {
  require(`./handlers/${file}`)(client, discord);
});

//*COMANDOS CON OTROS PREFIJOS*//

//messageCreate " / " //

//messageCreate " x " //

client.on("messageCreate", (msg) => {
  const prefix = "x";
    if (msg.author.bot) return;
 
    if (msg.content.startsWith(prefix)) {
      const argumentos = msg.content.slice(prefix.length).split(/ +/);
      const comando = argumentos.shift().toLowerCase();
      
      if (comando === "2") {
        msg.channel.send("x3");
      } 

    }
});

//messageCreate " n " //

client.on("messageCreate", (msg) => {
  const prefix = "n";
    
  if (msg.author.bot) return;
 
  if (msg.content.startsWith(prefix)) {
    const argumentos = msg.content.slice(prefix.length).split(/ +/);
    const comando = argumentos.shift().toLowerCase();
    //comandos-1-palabra//
    if(comando === "adie:"){
      msg.channel.send("absolutamente nadie:");
    }
  }
});

//messageCreate " g " //

client.on("messageCreate", (msg) => {
  const prefix = "i";
  if (msg.author.bot) return;
  if (msg.content.startsWith(prefix)) {
    const argumentos = msg.content.slice(prefix.length).split(/ +/);
    const comando = argumentos.shift().toLowerCase();
    //comandos-1-palabra//
    if(comando === "zi"){
      const anshycraft = ["Pero quien sos especular?", "Me encanta este server.", "GG", "Bueno quien tiene hambre.", "Creo que perdi :c"];
      const randomhycraft = Math.floor(Math.random() * (anshycraft.length));
      return msg.channel.messages
               .fetch({ limit: 1})
               .then((messages) => {
                 msg.channel.bulkDelete(messages);msg.channel
               .send(`${msg.author} » ${anshycraft[randomhycraft]}`);
               
      })
    }
  }  
});

//messageCreate " e " //

client.on("messageCreate", (msg) => {
  const prefix = "e";
  if (msg.author.bot) return;
  if (msg.content.startsWith(prefix)) {
    const argumentos = msg.content.slice(prefix.length).split(/ +/);
    const comando = argumentos.shift().toLowerCase();
    //comandos-1-palabra//
    if(comando === "z"){
      const anshycraft = ["Pero quien sos especular?", "Me encanta este server.", "GG", "Bueno quien tiene hambre.", "Creo que perdi :c"];
      const randomhycraft = Math.floor(Math.random() * (anshycraft.length));
      return msg.channel.messages
               .fetch({ limit: 1})
               .then((messages) => {
                 msg.channel.bulkDelete(messages);msg.channel
               .send(`${msg.author} » ${anshycraft[randomhycraft]}`);
    
               
      })
    }
    if(comando === "le"){
      const anshycraft = ["Pero quien sos especular?", "Me encanta este server.", "GG", "Bueno quien tiene hambre.", "Creo que perdi :c"];
      const randomhycraft = Math.floor(Math.random() * (anshycraft.length));
      return msg.channel.messages
               .fetch({ limit: 1})
               .then((messages) => {
                 msg.channel.bulkDelete(messages);msg.channel
               .send(`${msg.author} » ${anshycraft[randomhycraft]}`);
    
               
      })
    }
  }  
});

//messageCreate " g " //

client.on("messageCreate", (msg) => {
  const prefix = "g";
  if (msg.author.bot) return;
  if (msg.content.startsWith(prefix)) {
    const argumentos = msg.content.slice(prefix.length).split(/ +/);
    const comando = argumentos.shift().toLowerCase();
    //comandos-1-palabra//
    if(comando === "ey"){
      const anshycraft = ["Pero quien sos especular?", "Me encanta este server.", "GG", "Bueno quien tiene hambre.", "Creo que perdi :c"];
      const randomhycraft = Math.floor(Math.random() * (anshycraft.length));
      return msg.channel.messages
               .fetch({ limit: 1})
               .then((messages) => {
                 msg.channel.bulkDelete(messages);msg.channel
               .send(`${msg.author} » ${anshycraft[randomhycraft]}`);
               
      })
    }
  }  
});

//!TOKEN!//

client.login(process.env.DSTOKEN);
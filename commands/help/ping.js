module.exports = {
    name: "ping",
    description: "Muestra mi Latencia",
    async execute(client, message, args, discord) {
       const ping = new discord.MessageEmbed()
       .setColor([215, 215, 215])
       .setTitle("Pong! :ping_pong:"
       )
       .setDescription("-----------------------------------\nLatencia: " +client.ws.ping+" ms\n-----------------------------------" 
       )
       .setTimestamp()
       .setFooter("Ping | *ping", "https://cdn.discordapp.com/attachments/765947576721473576/898229075120906320/1d3785da3c1ca0f7c6646201ac4667a3.png");
  
       message.reply({ embeds: [ping] });
  },
};
  
  

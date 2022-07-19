module.exports = {
    name: "rds",
    description: "Muestra una descrición sobre los Roles de TSC.",

    async execute(client, message, args, discord) {

       const rds = new discord.MessageEmbed()
       .setColor("BLUE")
       .setTitle("Roles del Servidor")
       .setAuthor(
         "La Administración" /*Autor*/,
         "https://cdn.discordapp.com/attachments/765947576721473576/903854891192184832/tscs_rules.png" /* Icono*/,
        )
       .setDescription("```Estos son algunos de los roles que puedes tomar libremente, escoge con lo que te sientas identificado o creas que necesitas ternerlos, no se te va a obligar tomarlos, y en caso de que tomes los roles, se te pide que sea honesto al momento de escogerlos ya que:```\n\n➤ Se les hará ping o mencionarán a esos roles según sus temas respectivos.\n➤ Podrás participar a futuros eventos dependiendo de los roles.\n➤ Podrás ver canales exclusivos dependiendo a los roles que tomes.\n ➤ Sino son muy participativos con sus roles, se les quitará.")
  
        message.channel.send({ embeds: [rds] });
    },
};
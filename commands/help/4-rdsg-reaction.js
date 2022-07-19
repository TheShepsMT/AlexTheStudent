
module.exports = (reaction, user) => {

  const canal = reaction.message.channels.id
  const servidor = reaction.message.guild.id
  const mensaje = reaction.message.id

  if(servidor === "815934049725710376") {
      if(canal === "861017033439969291" &&  mensaje === "915789025212772393") {
          if(reaction.emoji.name === "Undertale") {
              reaction.message.guild.members.cache.get(user.id).roles.add('915464833246322714')
          }
        }   
    }     
}
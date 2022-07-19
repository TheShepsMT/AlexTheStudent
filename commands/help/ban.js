module.exports = {
    name: "ban2",
    description: "Este comando banea a un usuario mencionado",
    async execute(client, message, args, discord) {

        if(!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('¡No tienes permiso para usar este comando!') //Si no tienes permisos para banear retorna
        if(!message.guild.me.permissions.has('BAN_MEMBERS')) return message.channel.send('¡No tengo permiso para usar este comando!') //Si el bot no tiene permisos para banear retorna

        const member = message.mentions.members.first();
        if(!member) return message.channel.send('¡Debes mencionar a una persona!') //Si no mencionas "@" retorna

        const reason = args.slice(1).join(' ');
        if (!reason) return message.channel.send('¡Debes dar una razón de baneo!') //Si no das una razón retorna

        if(member.id === message.author.id) return message.channel.send('¡No te puedes autobanear!') //Si te mencionas para banearte retorna
        if(member.permissions.has('BAN_MEMBERS')) return message.channel.send('¡No puedes banear a esta persona!') //Si mencionas a alguien que tenga permisos para banear retorna

        member.ban({reason: reason})
        .then(() => { return message.channel.send(`${message.author} ha baneado a ${member}. Razón del ban: "${reason}"`) })
        .catch(() => { return message.channel.send('¡No se ha encontrado al usuario!') })

    }};
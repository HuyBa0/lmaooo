const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'serverlist',
    aliases: ['svlt'],
    category: 'Client',
    run: (client, message, args) => {
        function error(error) {
            const embed = new MessageEmbed()
            .setColor('RED')
            .setDescription(error)
            message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
      }
        if(message.author.id != message.guild.owner.id) return error(`Xin lỗi chỉ owner mới dược dùng <:wtf:950016469217988721>`)
        let serverlist = ''
        client.guilds.cache.forEach((guild) => {
            serverlist = serverlist.concat(" - " + guild.name + ": ID: " + guild.id + "\n")
        })
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Mình ở trong server sauu...", '')
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(serverlist)
        message.channel.send({embeds: [embed]});
        
    }
}
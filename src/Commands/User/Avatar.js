const {MessageEmbed, TextChannel} = require('discord.js')
module.exports = {
    name: 'avatar',
    aliases: ['av', 'avt'],
    category: 'Miscellaneous',
    run: (client, message, args, array) => { 
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) member = message.member;
        const url = member.user.displayAvatarURL({format: 'jpg', dynamic: true, size: 1024})
        try {
        const avatarEmbed = new MessageEmbed()
        .setTitle('Tải hình ở đây')
        .setURL(url)
        avatarEmbed.setAuthor(`Ảnh đại diện của ${member.user.username}`, client.user.displayAvatarURL())
        .setColor(`RANDOM`) /*#0372d7*/
        .setImage(member.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        message.reply({embeds: [avatarEmbed], allowedMentions: {repliedUser: false}})
        }catch (e) {
            console.error(e)
            message.reply((e.toString()))
            }
    }
}
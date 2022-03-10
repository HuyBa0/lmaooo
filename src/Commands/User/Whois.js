const {MessageEmbed} = require('discord.js');
const moment = require('moment')
module.exports = {
    name: 'whois',
    aliases: ['info'],
    run: (client, message, args) => {
        try {
        function error(error) {
            const embed = new MessageEmbed()
               .setColor('RED')
            .setDescription(error)
            message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
        }
        const id = args.join(' ')
        let member = message.mentions.members.first() || message.guild.members.cache.get(id) || message.member
        const avatarUsers = member.user.avatarURL({format: 'png', dynamic: true, size: 1024})
        const createtime= member.user.createdAt.toLocaleString()
        const createday = new Date(createtime)
        const createago = Math.floor(createday.getTime()/1000.0)
        const jointime = member.joinedAt.toLocaleString()
        const joinday = new Date(jointime)
        const joinago = Math.floor(joinday.getTime()/1000.0)
        const infoEmbed = new MessageEmbed()
        infoEmbed.setAuthor({name: `@${member.user.tag}`, iconURL: client.user.displayAvatarURL()})
        .setColor(`RANDOM`) /*#0372d7*/
        .addField('Tên 📛', `${member.user.username}`, true)
        .addField('Tag 📌', `${member.user.discriminator}`, true)
        .addField('Join server lúc ⏱', `${jointime.split(',').shift()} (<t:${joinago}:R>)`)
        .addField('Account được tạo lúc ⌚', `${createtime.split(',').shift()} (<t:${createago}:R>)`, true)
        .addField('ID người dùng 📋', `${member.id}`)
        .setThumbnail(avatarUsers)
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        message.reply({embeds: [infoEmbed], allowedMentions: {repliedUser: false}})
    }catch (e) {
        console.error(e)
        console.log(e)
        error('Tớ bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍 ')
        }
    }
}
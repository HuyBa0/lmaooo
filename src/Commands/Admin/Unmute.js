const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'unmute',
    category: 'Admin',
    run: (client, message, args) => {
        try {
            function error(error) {
                const embed = new MessageEmbed()
                .setColor('RED')
                .setDescription(error)
                message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
            }
            if (!message.member.permissions.has('MANAGE_ROLES') || !message.member.permissions.has('MANAGE_CHANNELS')) {
                error('Bạn chưa đủ trình dùng lệnh <:kamar_real:900380903635841034> 👍 ')
                return
            }
            function check(perm) {
                if (message.guild.me.permissions.has(perm)){
                  return true
                } else return false
              }
            
            if (!check('MANAGE_ROLES')){
                error('Mình thiếu perm "MANAGE_ROLES"')
                return
            }
            if (!check('MANAGE_CHANNELS')) {
                error('Mình thiếu perm "MANAGE_CHANNELS"')
            }
            
            function error1() {
            const error = new MessageEmbed()
                .setColor('RED')
                .setDescription('Bạn muốn mute ai :?')
            message.reply({embeds: [error], allowedMentions: {repliedUser: false}})
            }
            if (!args[0]) return error1()
            let target = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if (!target) {
                const error = new MessageEmbed()
                .setColor('RED')
                .setDescription(`Đây là ${args.join(' ')} ai vậy? Mình không thấy trong server`)
                message.reply({embeds: [error], allowedMentions: {repliedUser: false}})
                return 
            }
                let muted = target.roles.cache.some(r => (r.name === 'Muted'))
                let time = args.slice(1).join(" ")
                if(!time) time = 'Vĩnh viễn xd'
                var reason = 'Không có'
                if (args[1]) reason =  (args.slice(2)).join(' ')
                if (!muted) {
                    const error = new MessageEmbed()
                    .setColor('RED')
                    .setDescription(`'${target}' nó có bị mute đâu <:bruh:939764726269886474> `)
                    message.reply({embeds: [error], allowedMentions: {repliedUser: false}})
                    return
                }
                    target.roles.remove(target.roles.cache.filter(r => (r.name === 'Muted')), 'Unmute')
                    const embed = new MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('Unmuted')
                    .setThumbnail(target.user.displayAvatarURL())
                    .setTitle('Bạn đã được bỏ cấm chat! <a:vo_tay:947777278534897684>')
                    .addField('Bị unmute bởi', `> ${message.author}`)
                    .addField('Lý do', `> ${reason}`)
                    .setFooter('Thời gian bị unmute', client.user.displayAvatarURL())
                    .setTimestamp()
                    target.send({embeds: [embed]}).catch(() => {return})
                    const embed2 = new MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('Unmute')
                    .setThumbnail(target.user.displayAvatarURL())
                    .addField('Người dùng được unmute', `> ${target}`)
                    .addField('Được unmute bởi', `> ${message.author}`)
                    .addField('Lý do', `> ${reason}`)
                    .setFooter('Thời gian bị unmute', client.user.displayAvatarURL())
                    .setTimestamp()
                    message.reply({embeds: [embed2], allowedMentions: {repliedUser: false}})                 
        } catch (e) {
            error('Tớ bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍 ')
            console.error(e)
            console.log(e)
        }
    }
}
const { MessageEmbed } = require('discord.js');
const config = require('../../Data/config.json');

const name = 'ban'

module.exports = {
    name: 'ban',
    category: 'Moderator',
    aliases: 'Hem có',
    description: 'Cấm thành viên khỏi máy chủ',
    help: `> \`${config.prefix}${name} [@Thành viên] (Lí do)\``,
    run: (client, message, args,Array) => {
        try {
            function error(error) {
                const embed = new MessageEmbed()
                .setColor('RED')
                .setDescription(error)
                message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
            }
            if (!message.member.permissions.has("BAN_MEMBERS")) return error('Bạn không có quyền dùng lệnh').then(message => message.delete({timeout: 3000}))
            if (!message.guild.me.permissions.has('BAN_MEMBERS')) return error('Mình không có quyền cấm thành viên').then(message => message.delete({timeout: 3000}))
            if (!args[0]) {
                const error = new MessageEmbed()
                .setColor('RED')
                .setDescription('Bạn thiếu tag thành viên rồi!')
                .addField('Cách sử dụng', `> \`${config.prefix}${name} @Thành viên + Lí do<nếu muốn>\``
                )
                message.reply({embeds: [error], allowedMentions: {repliedUser: false}})
                return
            }
            if(member.id === message.author.id) return error(`Đã kick ${member}....nhưng.....tại sao!?`)
            if(member.id === message.guild.me.id) return error(`-.-`)
            if(!member) return error('Dường như không thể tìm thấy người này. Xin lỗi vì việc đó :/')
            if(!member.bannable) return error('Người dùng này không thể bị kick. Có thể là do họ là mod / admin, hoặc vai trò cao nhất của họ cao hơn tôi')
                let reason = args.slice(1).join(" ")
                if(!reason) reason = 'Không có lý do'
                target.ban({ reason: reason })
                const banembed = new MessageEmbed()
                .setTitle('Banned')
                .setThumbnail(member.user.displayAvatarURL())
                .addField('Người dùng bị ban', `> ${member}`)
                .addField('Bị ban bởi', `> ${message.author}`)
                .addField('Lý do', `> ${reason}`)
                .setFooter('Thời gian bị ban', client.user.displayAvatarURL())
                .setTimestamp()
                    message.channel.send({embeds: [banembed], allowedMentions: {repliedUser: false}});
                    const ban = new MessageEmbed()
                .setTitle (`Bạn bị ban ở: ${message.guild.name}`)
                .addField(`Bạn bị ban bởi:`, `> ${message.author}`)
                .addField(`Lý do:`, `> ${reason}`)
                .setColor ('#FF0000')
                .setFooter('Thời gian bị ban', client.user.displayAvatarURL())
                .setTimestamp()
                    member.send({embeds: [ban]}).catch(() => {});                   
        } catch (e) {
            error('Tớ bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍 ')
            console.error(e)
        }
    }
}
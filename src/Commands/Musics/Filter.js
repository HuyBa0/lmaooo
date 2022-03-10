const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'filter',
    aliases: ['f'],
    run: async (client, message, args, distube) => {
        const embed = new MessageEmbed()
            .setColor('RED')
            .setAuthor(`Nhấn vào để xem thêm filter....`,  client.user.displayAvatarURL(), 'https://distube.js.org/#/docs/DisTube/stable/typedef/defaultFilters')
            .setTitle('Có các filter sau, mà bạn có thể dùng:')
            .setDescription('> 3d, bassboost, echo, karaok, nightcore, vaporwave......')
        const queue = client.distube.getQueue(message)
        const embed3 = new MessageEmbed()
            .setColor('RED')
            .setDescription('❌ Không có bài nào đang được phát cả!')
        if (!queue) return message.reply({embeds: [embed3], allowedMentions: {repliedUser: false}})
        if (!args[0]) return message.channel.send({embeds: [embed], allowedMentions: {repliedUser: false}})
        try {
            const filter = client.distube.setFilter(message, args[0])
            const embed2 = new MessageEmbed()
            .setColor('#0058ff')
            .setDescription(`✔ Filter hiện tại là: \`${filter.join(', ') || 'Off'}\``)
            message.channel.send({embeds: [embed2], allowedMentions: {repliedUser: false}})
        } catch (e) {
            console.error(e)
        }
    }
  }
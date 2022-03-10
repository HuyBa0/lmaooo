const { MessageEmbed} = require('discord.js')
module.exports = {
    name: "autoplay",
    run: async (client, message, args, distube) => {
        const embed = new MessageEmbed()
            .setColor('RED')
            .setDescription('Mở nhạc đi, baka~')
        const queue = clinet.distube.getQueue(message)
        if (!queue) return message.reply({embeds: [embed], allowedMentions: {repliedUser: false}
        })
        try {
            const mode = clinet.distube.toggleAutoplay(message)
            const embed2 = new MessageEmbed()
            .setColor(`GREEN`)
            .setDescription("Đã `" + (mode ? "Bật" : "Tắt") + "` tự động phát bài mới. \ 😊")
            message.reply({embeds: [embed2], allowedMentions: {repliedUser: false}
            })
        } catch (e) {
            console.error(e)
            console.log(e)
            message.reply('Tớ bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍 ')
        }
    },
};
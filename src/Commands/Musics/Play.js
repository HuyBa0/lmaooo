const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'play',
    aliases: ['song', 'music', 'p'],
    category: 'music',
    run: async (client, message, args, distube) => {
        function error(error) {
            const embed = new MessageEmbed()
            .setColor('RED')
            .setDescription(error)
            message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
      }
        const music = args.join(' ')  
        const embed2 = new MessageEmbed()
            .setColor('RED')
            .setDescription('❌ Bạn cần cho mình biết tên bài chứ?')
        if (!music) return message.reply({embeds: [embed2], allowedMentions: {repliedUser: false}})
        try {
            const embed = new MessageEmbed()
            .setColor('RED')
            .setDescription('Vào voice đê! <:worry_sad_uong_sua:941685634500821022>')
            if (!message.member.voice.channel) return message.reply({embeds: [embed], allowedMentions: {repliedUser: false}}) 
            client.distube.play(message, music)
        } catch (e) {
            console.error(e)
            console.log(e)
            error('Mình bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍 ')
        } 
    }
}

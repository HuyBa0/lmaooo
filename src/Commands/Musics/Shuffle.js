const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'shuffle',
    inVoiceChannel: true,
    category: 'music',
    run: async (client, message, args, distube) => {
      try {
        function error(error) {
          const embed = new MessageEmbed()
          .setColor('RED')
          .setDescription(error)
          message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})}
        const embed = new MessageEmbed()
          .setColor('RED')
          .setDescription('Vào voice đê! <:worry_sad_uong_sua:941685634500821022>')
        const embed2 = new MessageEmbed()
          .setColor('RED')
          .setDescription('❌ Playlist còn mỗi bài à add thêm ik :>')
        const queue = client.distube.getQueue(message)
      if (!message.member.voice.channel) return message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
      if (queue.songs.length == 1) return message.reply({embeds: [embed2], allowedMentions: {repliedUser: false}})
      client.distube.shuffle(message)
      const embed3 = new MessageEmbed()
          .setColor('GREEN')
          .setDescription('✔ Đã trộn nhạc trong playlist')
        message.reply({embeds: [embed3], allowedMentions: {repliedUser: false}})
      }catch (e) {
        console.error(e)
        console.log(e)
        error('Mình bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍')
        }
    }
}
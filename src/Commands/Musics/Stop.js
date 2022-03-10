const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'stop',
  aliases: ['leave'],
  category: 'music',
  run: async (client, message, args, distube) => {
    try {
      function error(error) {
        const embed = new MessageEmbed()
        .setColor('RED')
        .setDescription(error)
        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})}
      function success(success) {
        const embed1 = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(error)
        message.reply({embeds: [embed1], allowedMentions: {repliedUser: false}})}
  const queue = client.distube.getQueue(message)
  if (!message.member.voice.channel) return error('Vào voice đê! <:worry_sad_uong_sua:941685634500821022>');
  if (queue) {
      client.distube.stop(message)
      success('✔ Đã dừng bài hát 🛑')
    } else if (!queue) {
      error('❌ Có bài nào phát đâu bạn :?')
    }
    } catch (e) {
      console.error(e)
      console.log(e)
      error('Mình bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍')
      }
  }
}
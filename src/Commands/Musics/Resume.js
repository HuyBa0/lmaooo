const { MessageEmbed } = require("discord.js")

module.exports = {
  name: 'resume',
  aliases: ['unpause'],
  category: 'music',
  run: async (client, message, args, distube) => {
    try {
      function error(error) {
        const embed = new MessageEmbed()
        .setColor('RED')
        .setDescription(error)
        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
  }
  const embed1 = new MessageEmbed()
    .setColor('RED')
    .setDescription('Vào voice đê! <:worry_sad_uong_sua:941685634500821022>')
  const queue = client.distube.getQueue(message)
  if (!message.member.voice.channel) return message.reply({embeds: [embed1], allowedMentions: {repliedUser: false}})
  if (queue) {
      client.distube.resume(message)
      client.distube.pause(message)
      client.distube.resume(message)
    } else if (!queue) {
      const embed = new MessageEmbed()
      .setColor('RED')
      .setDescription('❌ Hết nhạc rồi còn gì nữa :?')
      message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
  } catch (e) {
      console.error(e)
      console.log(e)
      error('Mình bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍 ')
      }
  }
}
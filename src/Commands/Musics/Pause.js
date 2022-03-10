const { MessageEmbed } = require("discord.js")

module.exports = {
  name: 'pause',
  category: 'music',
  run: async (client, message, args, distube) => {    
  const embed = new MessageEmbed()
    .setColor('RED')
    .setDescription('Vào voice đê! <:worry_sad_uong_sua:941685634500821022>')
  const queue = client.distube.getQueue(message)
  if (!message.member.voice.channel) return message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    if (queue) {
      client.distube.pause(message)
    } else if (!queue) {
      const embed2 = new MessageEmbed()
      .setColor('RED')
      .setDescription('❌ Mình đang không mở nhạc :l')
      message.channel.send({embeds: [embed2], allowedMentions: {repliedUser: false}})
    }
  }
}
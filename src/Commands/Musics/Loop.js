const { MessageEmbed } = require("discord.js")

module.exports = {
  name: 'loop',
  aliases: ['l', 'replay','r'],
  category: 'music',
  run: async (client, message, args, distube) => {
    try {
      function error(error) {
        const embed = new MessageEmbed()
        .setColor('RED')
        .setDescription(error)
        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
  }
      const embed = new MessageEmbed()
      .setColor('RED')
      .setDescription('Vào voice đê! <:worry_sad_uong_sua:941685634500821022>')
      const mode = client.distube.setRepeatMode(message)
      if (!message.member.voice.channel) return message.reply({embeds: [embed], allowedMentions: {repliedUser: false}
      })
      const embed2 = new MessageEmbed()
      .setColor('GREEN')
      .setDescription(`✔ Mình sẽ bật mode:  \`${mode ? mode === 2 ? 'Chơi nguyên list' : 'Cày view mode 🐧' : 'không phát lại bài'}\``)
      message.reply({embeds: [embed2], allowedMentions: {repliedUser: false}
      })
    }catch (e) {
      console.error(e)
      console.log(e)
      error('Mình bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍 ')
      }
  }
}
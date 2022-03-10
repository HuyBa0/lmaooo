const { Constants } = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'join',
  aliases: ['move'],
  run: async (client, message, args, distube) => {
      try {
        function error(error) {
          const embed = new MessageEmbed()
          .setColor('RED')
          .setDescription(error)
          message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
          let voiceChannel = message.member.voice.channel
        if (args[0]) {
          voiceChannel = await channels.fetch(args[0])
          if (!Constants.VoiceBasedChannelTypes.includes(voiceChannel?.type)) {
            return message.channel.send(`❌ Mình không thấy kênh voice đó!`)
          }
        }
        if (!voiceChannel) {
          const embed = new MessageEmbed()
          .setColor('RED')
          .setDescription(`❌ Bạn phải vào voice hoặc cho mình biết id voice mà bạn muốn mình vào chứ!<:smiledog:940451177227759627>`)
          return message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
        }
        client.distube.voices.join(voiceChannel)
      }catch (e) {
        console.error(e)
        console.log(e)
        error('Mình bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍 ')
        }
    }
}
    
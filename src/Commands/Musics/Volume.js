const { MessageEmbed } = require("discord.js")
const maxVol = 150
module.exports = {
  name: 'volume',
  aliases: ['v'],
  category: 'music',
  run: async (client, message, args) => {
    try {
      function error(error) {
        const embed = new MessageEmbed()
        .setColor('RED')
        .setDescription(error)
        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
  }
      if (!message.member.voice.channel) return error('Vào voice đê! <:worry_sad_uong_sua:941685634500821022>')      
      if (isNaN(args[0])) return error(`❌ Ghi cái gì vậy trời, ghi số thôi, ghi **1** -> **${maxVol}** nhé! -.-`)
      const queue = client.distube.getQueue(message)
    const embed = new MessageEmbed()
    .setColor('RED')
    .setDescription('Đang không có nhạc, mở nhạc đi!')


    if (!queue) return error('❌ Đang không có nhạc, mở nhạc đi!')
     if (!args[0]) {
       error(`❌ Ghi cái gì vậy trời, ghi số thôi, ghi **1** -> **${maxVol}** nhé! -.-`)
       return
     }else {
      if (Number(args[0]) < 0 || Number(args[0]) > maxVol) return error(`❌ Từ **1** -> **${maxVol}** thôi bro!`)
      client.distube.setVolume(message, Number(args[0]))
      const embed5 = new MessageEmbed()
      .setColor('GREEN')
      .setDescription(`✔ Mình đã đặt âm lượng thành: \`${queue.volume}%\``)
      message.reply({embeds: [embed5], allowedMentions: {repliedUser: false}})
    }
  }catch (e) {
    console.error(e)
    console.log(e)
    error('Mình bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍')
    }
  }
}
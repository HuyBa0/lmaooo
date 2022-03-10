const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'ping',
    category: 'Client',
    run: async (client, message) => {
      try {
        function time(i){
          var time = new Date(i)
          return i = time.getTime()/1000.0
      }
        const ping = Math.floor(time(Date.now()) - time(message.createdTimestamp))
        const ping1 = new MessageEmbed()
          .setTitle('PINGING.....!')
          .setDescription('Chờ mình tí')
          .setColor("YELLOW")
        const pong = new MessageEmbed()
          .setTitle('PONG!')
          .addFields(
            { name: 'Độ trễ của Bot💫', value: `${Date.now() - message.createdTimestamp}ms` },
            { name: 'Độ trễ của API💫', value: `${Math.round(client.ws.ping)}ms`, inline: true },
          )
          .setTimestamp()
          .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
          if (ping < 50) pong.setColor('#00ff00')  
          else if (ping < 200) pong.setColor('#ff6a00')  
              else pong.setColor('#ff0000')
        const pinging = await message.reply({embeds: [ping1], allowedMentions: {repliedUser: false}})
        setTimeout(() => {
        pinging.edit({embeds: [pong]})
        pinging.react("🏓")
        }, 2500)
      }catch (e) {
        console.error(e)
        console.log(e)
        message.reply('Tớ bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍 ')
        }
    }
}
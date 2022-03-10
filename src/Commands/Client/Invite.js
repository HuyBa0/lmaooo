const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'invite',
    category: 'Client',
    aliases: ['inv'],
    run: (client, message) => {
        try{
            const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`Invite mình :>`)
                .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setTitle('Nhấp vào đây để mời mình vào máy chủ của bạn!')
                .setURL('https://discord.com/api/oauth2/authorize?client_id=866551659844206632&permissions=347138630&scope=bot')
            message.reply({ embeds: [embed], allowedMentions: {repliedUser: false}}) 

        }catch(e){
            console.error(e)
            console.log(e)
            message.reply('Tớ bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍 ')
        }
    }
}
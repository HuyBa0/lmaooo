const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'say',
    category: "Miscellaneous",
    run: async (client, message, args) => {
        const validPermissions = [
            "SEND_MESSAGE"
        ]
        
        try{ 
            const embed = new MessageEmbed()
            .setColor('RED')
            .setDescription('Bạn không có quyền dùng lệnh này =)))')
            const member = message.mentions.members.first()
            if (message.author.id !== '932796221158985758') return message.reply({embeds: [embed], allowedMentions: {repliedUser: false}}) 
            const say = args.join(' ')
            if (!say) return message.channel.send('Ghi gì đi chứ :>')
            message.delete()
            message.channel.send(say)

        } catch (e) {
            console.error(e)
            console.log(e)
            message.reply('Tớ bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍 ')
            }
    }
}
const { MessageEmbed, ButtonInteraction } = require('discord.js');

module.exports = {
    name: 'serverinfo',
    category: 'Admin',
    run: (client, message) => {
        try {
            const members = message.guild.members.cache
            const guild = message.guild
            const channels = message.guild.channels.cache;
            const all = guild.channels.cache.size
            const categories = guild.channels.cache.filter(c => c.type === "GUILD_CATEGORY").size
            const text = guild.channels.cache.filter(c => (c.type === "GUILD_TEXT" || (c.type === "GUILD_NEWS"))).size
            const voice = guild.channels.cache.filter(c => (c.type === "GUILD_VOICE") || (c.type === "GUILD_STAGE_VOICE")).size
            const memberCount = message.guild.members.cache.filter(member => !member.user.bot).size;
            const totalCount = message.guild.memberCount
            const role = guild.roles.cache.size
            const createtime = guild.createdAt.toLocaleDateString()
            const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`Thông tin của server ${guild.name}`, guild.iconURL({dynamic: true}))
                .setThumbnail(guild.iconURL({dynamic: true}))
                .addFields(
                    {name: '• Chủ server:', value: `> <@${guild.ownerId}>`, inline: true},
                    {name: '• ID server:', value: `> ${guild.id}`, inline: true},
                    {name: '• Tạo server ngày:', value: `> ${createtime}`, inline: true},
                    {name: '• Số boost', value: `> ${message.guild.premiumSubscriptionCount || '0'}`, inline: true},
                    {name: '• Tổng roles:', value: `> ${role}`, inline: true},
                    {name: '• Tổng emojis:', value: `> ${message.guild.emojis.cache.size}`, inline: true},
                    {name: '• Tổng kênh:', value: `> ${all - categories}`, inline: true},
                    {name: '• Kênh chat:', value: `> ${text}`, inline: true},
                    {name: '• Kênh thoại:', value: `> ${voice}`, inline: true},
                    {name: '• Tổng thành viên', value: `> ${totalCount}`, inline: true},
                    {name: '• Số human trong server:', value: `> ${memberCount}`, inline: true},
                    {name: '• Số bot trong server:', value: `> ${members.filter(member => member.user.bot).size}`, inline: true },
                )
                .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
            message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})        
            
        }catch(e){
            console.error(e)
            console.log(e)
            message.reply('Tớ bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍 ')
        }
    }
}
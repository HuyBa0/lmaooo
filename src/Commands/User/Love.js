const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "love",
    category: "Miscellaneous",
    run: async (client, message, args) => {
        try {
        let person = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!person) return message.reply({embeds: [embed1], allowedMentions: {repliedUser: false}})

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        const embed = new MessageEmbed()
            .setColor("#ffb6c1")
            .addField(`☁ **${person.displayName}** thích **${message.member.displayName}** như thế này:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`)
            .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))

        return
        const embed1 = new MessageEmbed()
        .setColor('RED')
        .setDescription('Tag tên họ vào đây :>') 
        message.channel.send({embeds: [embed], allowedMentions: {repliedUser: false}});
    } catch {
        console.error(e)
        console.log(e)
        message.reply('Tớ bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍 ')
    }
    }
}
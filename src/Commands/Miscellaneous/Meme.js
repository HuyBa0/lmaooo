const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "meme",
    aliases: ['mim'],
    category: "Miscellaneous",
    run: async (client, message, args) => {
        try{
        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`Từ /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`)
            .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}});
        } catch {
            console.error(e)
            console.log(e)
            message.reply('Tớ bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍 ')
        }
    }
}
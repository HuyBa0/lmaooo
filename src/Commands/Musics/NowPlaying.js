const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "nowplaying",
        aliases: ["np", "now"],
        category: "music",
    },
    run: async (client, message, args) => {
        function error(error) {
            const embed = new MessageEmbed()
            .setColor('RED')
            .setDescription(error)
            message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
      }
      const status = queue =>
	`Âm lượng: \`${queue.volume}%\` | Filter: \`${queue.filters.join(', ')
		|| 'Tắt'}\` | Lặp lại: \`${
		queue.repeatMode
			? queue.repeatMode === 2
				? 'Nguyên playlist'
				: 'Cày view mode 🐧'
			: 'Tắt'
	}\` | Tự động phát: \`${queue.autoplay ? 'Bật' : 'Tắt'}\``
        const queue = client.distube.getQueue(message);
        if (!queue) error(`❌ Không có bài nào đang mở!`)
        const { channel } = message.member.voice;
        if (!channel || message.member.voice.channel !== message.guild.me.voice.channel) return error("Vào voice đê! <:worry_sad_uong_sua:941685634500821022>")

        const uni = `${queue.songs[0].playing ? '⏸️ |' : '🔴 |'}`;
        const part = Math.floor((queue.currentTime / queue.songs[0].duration) * 30);

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(song.name)
        .setURL(song.url)
        .setAuthor(`Tớ đang mở bài...`, 'https://c.tenor.com/sce9SDRey4EAAAAi/disc.gif')
        .setDescription(`Độ dài bài hát \`${song.formattedDuration}\``)
        .addField(`Thời lượng hiện tại: \`[${queue.formattedCurrentTime} / ${queue.songs[0].formattedDuration}]\``, `\`\`\`${uni} ${'─'.repeat(part) + '🎶' + '─'.repeat(30 - part)}\`\`\``)
        .setThumbnail(song.thumbnail)
        .addField('Người đăng tải:', `[${queue.songs[0].uploader.name}](${queue.songs[0].uploader.url})`, true)
        .addField(`\n${status(queue)}`, '** **')
        .addField('**Lượt xem 👀**', `\`${song.views}\``,true)
        .addField('**Lượt thích 👍**', `\`${song.likes}\``,true)
        .addField(`\nĐược yêu cầu bởi `, `${song.user} ✅`)
        .setTimestamp()
        message.channel.send({ embeds: [embed] });
    }
}

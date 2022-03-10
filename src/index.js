//Ba0 (Uzu) khong tu lam het code nhung cung da them that nhung thu can thiet
const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const Distube = require('distube');
const {SoundCloudPlugin} = require('@distube/soundcloud')
const {SpotifyPlugin} = require('@distube/spotify')
const config  = require('./Data/config.json');


const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
  ]
});
module.exports = client;

//Client

client.once('ready', () => {
	console.log(`${client.user.username} vao roi nha`);
  client.user.setStatus('idle');
  const activities_list = [
		'.',
		`Dùng ${config.prefix}help để xem tui có thể làm gì `,
		`Nếu mình có lỗi thì kêu ông Urashi#3280 nhé! | ${config.refix} help`,
		`Tui đang nằm trong ${client.guilds.cache.size} server 😴 | ${config.prefix} help`
	];
  setInterval(() => {
		const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); //
		client.user.setActivity(activities_list[index], { type: '' });
	}, 10000);

  client.commands = new Collection();
  client.aliases = new Collection();

  ['cmd.js'].forEach(handler => {
		require(`../handlers/${handler}`)(client);
	});

});

//====================================================================================================================\\

const status = queue =>
	`Âm lượng: \`${queue.volume}%\` | Filter: \`${queue.filters.join(', ')
		|| 'Tắt'}\` | Lặp lại: \`${
		queue.repeatMode
			? queue.repeatMode === 2
				? 'Nguyên playlist'
				: 'Cày view mode 🐧'
			: 'Tắt'
	}\` | Tự động phát: \`${queue.autoplay ? 'Bật' : 'Tắt'}\``

client.distube = new Distube.default(client, {
  searchSongs: 5,
	searchCooldown: 30,
	leaveOnEmpty: true,
	emptyCooldown: 20,
	leaveOnFinish: false,
	leaveOnStop: false,
	plugins: [new SoundCloudPlugin(), new SpotifyPlugin()],
});

client.distube
  .on('playSong', (queue, song) => {
  const embet = new MessageEmbed()
  .setColor('RANDOM')
  .setTitle(song.name)
  .setURL(song.url)
  .setAuthor(`Tớ đang mở bài...`, 'https://c.tenor.com/sce9SDRey4EAAAAi/disc.gif')
  .setDescription(`Độ dài bài hát \`${song.formattedDuration}\``)
  .setThumbnail(song.thumbnail)
  .addField('Người đăng tải:', `[${queue.songs[0].uploader.name}](${queue.songs[0].uploader.url})`, true)
embet.addField(`\n${status(queue)}`, '** **')
embet.addField('**Lượt xem 👀**', `\`${song.views}\``,true)
embet.addField('**Lượt thích 👍**', `\`${song.likes}\``,true)
embet.addField(`\nĐược yêu cầu bởi `, `${song.user} ✅`)
.setTimestamp()
queue.textChannel.send({embeds: [embet], allowedMentions: {repliedUser: false}})
})

.on('addSong', (queue, song, message) =>{
  const pauseEmbed = new MessageEmbed()
  .setURL(song.url)
  .setTitle(`${song.name} `)
  .setDescription(`✔ Đươc thêm vào hàng chờ bởi ${song.user}`)
    .setThumbnail(song.thumbnails)
    .addField('Thời lượng:', `${song.formattedDuration}`)
    .setColor('GREEN');
    queue.textChannel.send({embeds: [pauseEmbed]}).then(message => message.react('📝'));
})
.on('addList', (queue, playlist) =>
  queue.textChannel.send(`Đã thêm \`${playlist.name}\` danh sách phát (${
      playlist.songs.length
      } songs) vô hàng chờ\n${status(queue)}`))
.on('searchResult', (message, result) => {
  let i = 0
    const searchemebed = new MessageEmbed()
      searchemebed.addField('🔎 Search Nhạc 🔎', `** 🔍Dựa trên từ khóa, mình tìm được:**\n${result
        .map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``)
        .join("\n")}\n*Bạn có 30s để chọn, để hủy thì chờ hết 30s hoặc ghi chữ "huy"(ツ).*`)
        .setColor('GREEN')
        .setThumbnail('https://cdn.iconscout.com/icon/free/png-256/youtube-search-1698519-1457029.png')
        .setTimestamp()
      message.reply({ embeds: [searchemebed], allowedMentions: {repliedUser: false}}) 
  })
.on('searchCancel', message =>{
  const endtime = new MessageEmbed()
  .setColor('RED')
  .setDescription(`❌ Hết thời gian chọn nhạc ròi😪.`)
  message.reply({ embeds: [endtime], allowedMentions: {repliedUser: false}}) 
})
.on('searchInvalidAnswer', message => {
  const sotnhac = new MessageEmbed()
    .setColor('GREEN')
    .setDescription('✔ Đã hủy search nhạc!') 
    message.reply({ embeds: [sotnhac], allowedMentions: {repliedUser: false}})
})
.on('searchNoResult', message => {
  const khongthaynhac = new MessageEmbed()
    .setColor('RED')
    .setDescription(`❌ Mình không tìm thấy bài đó, thử lại đi xd!`)
  message.reply({ embeds: [khongthaynhac], allowedMentions: {repliedUser: false}}) 
})
.on("searchDone", () => { })
.on('error', (textChannel, e) => {
  const cantjoin = new MessageEmbed()
    .setColor('RED')
    .setDescription('❌ Có vẻ mình không join voice được.')
    const error = new MessageEmbed()
  .setColor('RED')
  .setDescription('❌ Oh, có lỗi rồi 🤔.')
            console.error(e)
        textChannel.send({ embeds: [error]})
        if (e.errorCode == 'VOICE_MISSING_PERMS') {
            textChannel.send({ embeds: [cantjoin]}) 
        }
        })
.on('finish', queue => {
  const endsong = new MessageEmbed()
    .setColor('RED')
    .setDescription('Hết nhạc mất tiu rùi 😪')
  queue.textChannel.send({embeds: [endsong]})
})

//===========================================================================================================================================\\

client.on('messageCreate', (message, async) => {
  function check(perm) {
    if (message.channel.permissionsFor(client.user.id).has([perm])){
      return true
    } else return false
  }
  if (!check('SEND_MESSAGES')) {
    message.author.send('> Mình không có quyền gửi tin nhắn vào kênh đó <:ganyu_cry:947467770717675531>')
    return
  } else if (!(check('EMBED_LINKS') || check('ATTACH_FILES'))) {
    message.channel.send('> Mình không có quyền gửi ảnh hoặc liên kết vào kênh này <:ganyu_cry:947467770717675531>')
    return
  }
  if (!(message.content.toLowerCase()).startsWith(config.prefix)) return
  if (message.author.bot) return;
  if (!message.guild) return;
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length == 0) return;
  let commands = client.commands.get(cmd);
  if (!commands) commands = client.commands.get(client.aliases.get(cmd));
  if (commands) commands.run(client, message, args);
})

//const keepAlive = require('./host')
//keepAlive()
client.login(config.token);
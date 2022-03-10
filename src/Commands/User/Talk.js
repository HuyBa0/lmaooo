const { MessageEmbed } = require('discord.js');
const { getAudioUrl } = require ('google-tts-api');

module.exports = {
    name: 'talk',
    aliases: ['speak' ,'sp', 't', 'nói'],
    category: 'user',
    run: async (client, message, args, distube) => {
        const voiceChannel = message.member.voice.channel;
        
        const embed = new MessageEmbed()
        .setColor('RED')
        .setDescription('Bạn phải vào voice mới nghe mình nói được chứ!')
        if (!voiceChannel) return message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
        .then(message => message.delete({timeout: 7000}))
        
        const embed2 = new MessageEmbed()
        .setColor('RED')
        .setDescription('Bạn chưa nói với tui bạn muốn nói gì?')
        if (!args[0]) return message.reply({embeds: [embed2], allowedMentions: {repliedUser: false}})
        .then(message => message.delete({timeout: 4000}))
        const string = args.join(' ');
        
        const embed3 = new MessageEmbed()
        .setColor('RED')
        .setDescription('Bạn viết dài quá! Dỗi không thèm đọc >:l')
        if (string.length > 200) return message.reply({embeds: [embed2], allowedMentions: {repliedUser: false}})
        .then(message => message.delete({timeout: 4000}))
        
        const audiourl = getAudioUrl(string, {
            lang: 'vi',
            slow: false,
            host: 'http://translate.google.com',
            timeout: 100000,
        });
        try {
                let voiceChannel = message.member.voice.channel
            distube.voices.join(voiceChannel).then(connection => {
                const dispatcher = connection.play(audiourl);
                dispatcher.on('finish', () => {
                    voiceChannel.leave();
                })
            })
        }
        catch(e) {
            console.error(e)
            console.log(e)
            message.reply({embeds: [error], allowedMentions: {repliedUser: false}})
            }
    },

};
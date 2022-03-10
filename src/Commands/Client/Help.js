const {MessageEmbed, MessageButton} = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination');
const config = require('../../Data/config.json')

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Client',
    run: (client, message, args) => {
        try {
        const menu = new MessageEmbed()
        .setAuthor ('Trợ Giúp', client.user.displayAvatarURL())
        .setTitle(`Mặc định, sử dụng ${config.prefix} ở đầu câu để dùng lệnh`)
        .setColor('BLUE')

        const musicembed = new MessageEmbed()
        .setTitle('Music🎶')
        .setThumbnail('https://images-ext-2.discordapp.net/external/aDxIerYzDXvB93KsJuhnGmhEtZd4_oWAcEPV5Cmakcg/https/media.giphy.com/media/eJLOLTKoP7WKVem1su/giphy.gif')
        .addField('Play: Phát nhạc ', 'Aliases: `song, music, p`', true)
        .addField('Pause: Dừng nhạc', 'Aliases: `none`', true)
        .addField('Resume: Phát tiếp nhạc', 'Aliases: `unpause`', true)
        .addField('Volume:  Để chỉnh âm lượng', 'Aliases: `v`', true)
        .addField('Skip: Để skip bài', 'Aliases: `s`', true)
        .addField('Loop: Để phát đi phát lại một bài hát', 'Aliases: `l, replay, r`', true)
        .addField('Queue: Để xem trong playlist có gì. ', 'Aliases: `q`', true)
        .addField('Shuffle: Trộn bài để nghe ngẫu nhiên. ', 'Aliases: `none`', true)
        .addField('Leave: Thoát voice. ' , 'Aliases: `none`', true)
        .addField('AutoPlay: Để tự động tìm bài mới khi hết bài.', 'Aliases: `none`', true)
        .addField('Join: Để vào voice mà bạn đang ở.', 'Aliases: `none`', true)
        .addField('Filter: Để nghe các filter mà api có sẵn', 'Aliases: `f`', true)
        .setAuthor('Bảng Hép của.....', client.user.displayAvatarURL() )
        .setColor('BLUE')

        const clientembed = new MessageEmbed()
        .setTitle('Client 💻')
        .setThumbnail('https://images-ext-2.discordapp.net/external/aDxIerYzDXvB93KsJuhnGmhEtZd4_oWAcEPV5Cmakcg/https/media.giphy.com/media/eJLOLTKoP7WKVem1su/giphy.gif')
        .addField('Ping: Xem tớ có lag không :D ', 'Aliases: `none`')
        .addField('Help: Làm xem bảng này :b', 'Aliases: `h`')
        .addField('Invite: Mời mình vào server bằng cách thủ công', 'Aliases: `inv`')
        .setAuthor( 'Bảng Hép của.....', client.user.displayAvatarURL() )
        .setColor('BLUE')
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))

        const userembed = new MessageEmbed()
        .setTitle('User 👤')
        .setColor('BLUE')
        .setThumbnail('https://images-ext-2.discordapp.net/external/aDxIerYzDXvB93KsJuhnGmhEtZd4_oWAcEPV5Cmakcg/https/media.giphy.com/media/eJLOLTKoP7WKVem1su/giphy.gif')
        .addField('Whois: Để xem in4 người khác 🐧', 'Aliases:`none`')
        .addField('Serverinfo: Để xem in4 server khác 🐧', 'Aliases:`none`') 
        .addField('Avatar: Xem avatar của bạn hoặc người khác :D', 'Aliases: `av, avt`')
        .addField('Love: Để tớ đoán tình yêu của cậu với bạn khác 😍', 'Aliases: `none`')
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))

        const miscellaneousembed = new MessageEmbed()
        .setTitle('Miscellaneous 🎈')
        .setThumbnail('https://images-ext-2.discordapp.net/external/aDxIerYzDXvB93KsJuhnGmhEtZd4_oWAcEPV5Cmakcg/https/media.giphy.com/media/eJLOLTKoP7WKVem1su/giphy.gif')
        .addField('Waifu : Để tớ tìm ảnh waifu của bạn 😳', 'Aliaeses: `w`')
        .addField('Say: Để mình nhắc lại những gi bạn nhắn', 'Aliaese: `none`')      
        .addField('Meme: Để mình lấy meme trên reddit ( toàn meme tiếng anh à 🤦‍♂️)', 'Aliases: `mim`')
        .addField('Weather: Để mình dự báo thời tiết chỗ bạn', 'Aliases: `wt`')
        .addField('Covid: Để mình liệt kê tình hình covid của thế giời và các nước khác', 'Aliases: `cv, covid19, 19`')
        .addField('Sẽ update sau :c', '** **')
        .setAuthor( 'Bảng Hép của.....', client.user.displayAvatarURL() )
        .setColor('BLUE')
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))

        const adminembed = new MessageEmbed()
        .setTitle('Administrator 👮‍♂️')
        .setThumbnail('https://images-ext-2.discordapp.net/external/aDxIerYzDXvB93KsJuhnGmhEtZd4_oWAcEPV5Cmakcg/https/media.giphy.com/media/eJLOLTKoP7WKVem1su/giphy.gif')
        .addField('Ban: Để cấm người dùng khác', 'Aliases: `pan`')
        .addField('Unban: Để bỏ cấm người khác', 'Aliases:`none`')
        .addField('Kick: Để đá người khác ra khỏi server', 'Aliases:`none`')
        .addField('Mute: Để mute người khác', 'Aliases:`none`')
        .addField('Unmute: Để unmute người khác', 'Aliases:`none`')
        .setAuthor( 'Bảng Hép của.....', client.user.displayAvatarURL() )
        .setColor('BLUE')
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))


        const truoc = new MessageButton()
        .setCustomId('previousbtn')
        .setLabel('Trước')
        .setStyle('DANGER');
        
        const sau = new MessageButton()
        .setCustomId('nextbtn')
        .setLabel('Sau')
        .setStyle('SUCCESS');
        
        pages = [
            menu,
            clientembed,
            adminembed,
            miscellaneousembed,
            musicembed,
        ];
        
        buttonList = [
            truoc,
            sau
        ];
        
        timeout = '120000000';
        paginationEmbed(message, pages, buttonList, timeout);
        }catch (e) {
            console.error(e)
            console.log(e)
            message.reply('Tớ bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍 ')
            }
    }
}
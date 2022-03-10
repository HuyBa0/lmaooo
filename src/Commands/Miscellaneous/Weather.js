//con chai nho lam cho no khac day -send- => cam
//co gang lam bot di -send- => obsi
const { MessageEmbed } = require('discord.js');
const weather = require('weather-js');

module.exports = {
        name: 'weather',
        aliases: ['wt'],
        category: "Mics",
    run: async (client, message, args) => {
        if(args.length === 0){
            let errorembed = new MessageEmbed()
            .setDescription('Ghi thêm tên thành phố coi')
            .setColor('RED')
            .setTimestamp();
                return message.reply({embeds: [errorembed], allowedMentions: {repliedUser: false}});
        }
        
        weather.find({ search: args.join(" "), degreeType: 'C'}, function(err, result) {
          
        if(result.length === 0){
            let errorembed = new MessageEmbed()
            .setDescription("Mình không tìm thấy chỗ đó .-.")
            .setColor('RED')
            .setTimestamp()
                return message.reply({embeds: [errorembed], allowedMentions: {repliedUser: false}});
        }
        
          var current = result[0].current;
          var location = result[0].location;
          let CurrentWeather = '--'
            if (current.skytext == 'Sunny') CurrentWeather = 'Nhiều nắng';
            if (current.skytext == 'Mostly Sunny') CurrentWeather = 'Có nắng';
            if (current.skytext == 'Partly Sunny') CurrentWeather = 'Có nắng';
            if (current.skytext == 'Cloudy') CurrentWeather = 'Nhiều mây';
            if (current.skytext == 'Mostly Cloudy') CurrentWeather = 'Nhiều mây';
            if (current.skytext == 'Partly Cloudy') CurrentWeather = 'Có mây vài nơi';
            if (current.skytext == 'Rain') CurrentWeather = 'Mưa';
            if (current.skytext == 'Light Rain') CurrentWeather = 'Mưa nhẹ';
            if (current.skytext == 'Rain Showers') CurrentWeather = 'Mưa rào';
            if (current.skytext == 'Clear') CurrentWeather = 'Trời quang';
            if (err) {
            let errorembed = new MessageEmbed()
            .setDescription("Mình không tìm thấy chỗ đó .-.")
            .setColor('RED')
            .setTimestamp()
                return message.reply({embeds: [errorembed], allowedMentions: {repliedUser: false}});
            }
        
            
            let embed = new MessageEmbed()
            .setDescription(`*Số liệu chỉ để tham khảo (Không chính xác 100%)*`)
            .setAuthor(`${current.observationpoint}`)
            .setTitle(`${CurrentWeather}`)
            .setThumbnail(current.imageUrl)
            .setColor('GREEN')
            .addField('Nhiệt độ🌡', `${current.temperature}°C `, true)
            .addField('Cảm thấy như🌡', `${current.feelslike}°C`, true)
            .addField('Tốc độ gió💨', `${current.winddisplay}`, true)
            .addField('Độ ẩm 💧', `${current.humidity}%`, true)
            .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
                message.reply({embeds: [embed], allowedMentions: {repliedUser: false}});
        });
    }
};

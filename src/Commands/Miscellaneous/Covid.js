const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'covid',
  aliases: ["cv", "cv19", "covid19"],
  category: "Mics",
    run: async (client, message, args) => {
        const baseUrl = 'https://corona.lmao.ninja/v2';

        let url; let response; let
            corona;

        try {
            url = args[0] ? `${baseUrl}/countries/${args[0]}` : `${baseUrl}/all`;
            response = await axios.get(url);
            corona = response.data;
        } catch (error) {
            const embed2 = new MessageEmbed()
            .setColor(`RED`)
            .setDescription(`**${args[0]}** không tồn tại hoặc dữ liệu không được thu thập!`)
            return message.channel.send({embeds: [embed2], allowedMentions: {repliedUser: false}});
        }

        const embed = new MessageEmbed()
            .setTitle(args[0] ? ` Thông kê dịch bênh ở ${args[0].toUpperCase()}`: 'Tổng số trường hợp Corona trên toàn thế giới🌐')
            .setColor('GREEN')
            .setDescription(` **🦠 Tình hình dịch bệnh COVID-19 🦠** \n*Số liệu chỉ để tham khảo (Không chính xác 100%)*`)
            .setThumbnail(args[0] ? corona.countryInfo.flag : 'https://images-ext-2.discordapp.net/external/N_A3QSysdQlckd3qidEMgV2NvhYD68E6HPnjJsqxW8M/https/media.giphy.com/media/RhqSJXJXun5iU5thc1/giphy.gif?width=469&height=469')
            .addFields(
                {
                    name: 'Tổng ca nhiễm 🤒',
                    value: `${corona.cases.toLocaleString()}ca mắc`,
                    inline: true,
                },
                {
                    name: 'Tổng ca không qua khỏi 😔',
                    value: `${corona.deaths.toLocaleString()}ca mắc`,
                    inline: true,
                },
                {
                    name: 'Tổng ca hồi phục 🤕',
                    value: `${corona.recovered.toLocaleString()} ca`,
                    inline: true,
                },
                {
                    name: 'Ca nhiễm bệnh hiện tại 🤒',
                    value: `${corona.active.toLocaleString()} ca`,
                    inline: true,
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true,
                },
                {
                    name: 'Các ca nghiêm trọng 😷',
                    value: `${corona.critical.toLocaleString()} ca`,
                    inline: true,
                },
                {
                    name: 'Hôm nay phục hồi 🤕',
                    value: `${corona.todayRecovered.toLocaleString().replace('-', '')} ca`,
                    inline: true,
                },
                {
                    name: 'Hôm nay không qua khỏi 😔',
                    value: `${corona.todayDeaths.toLocaleString()} ca`,
                    inline: true,
                },
            );

        return message.channel.send({embeds: [embed], allowedMentions: {repliedUser: false}});
    },
};
//code cua huy ao vai lol <("") - uzus
//u huy xin loi
const { MessageEmbed } = require('discord.js')
const request = require('request') 

module.exports = {
    name:'waifu',
    aliases: ['w'],
    category: 'Miscellaneous',
    run: async (client, message, args) => {
        var headers = {
            'cookie': 'csrftoken=c0a221f41ccc3d52e262a20ea0ac5bcf; _routing_id="1653a17b-9788-44d8-870a-5a361301d75c"; sessionFunnelEventLogged=1; g_state={"i_l":0}; _auth=1; _pinterest_sess=TWc9PSZmK0tFV3d5cWVOOVJER3NxTVNLQjdJaDI5OTBnZUw3VTJZdi9HTVpyalIxWG1kOHMzR3VoVUhPQTAySXQ1SERVYVZTZ1NGcXJiSmk0TFJ6WjB0eTF1Ri9JVHBmOHhnRXdwajFOSEJzK2l5NXQ2MnY2SFZGeTlra2wyOG56aW9PaVRiNStxQzFVbzFlQU5sbXRVandoYkM3S0Q5U09Vb1I2SXlsYUV6WGV5SUJtYUJDalFtMXhQQnI3QytmR21aWllUa0tpeFEvaGlhTmZWS3dvZ2hXajlRZTV1eFJwdmRzbGNBbEtOUHF0NDlVMmpzMURhcko2cENURVNKM0xuSFN5K09LSnpOeFg5eEtPYkhLTzlCeDdsWG5YWkZKUHFrZGpWNnVNcjZ0MHM5OU8vLy9Td1VTTXFuOU1UdGpOL2ptYmNSY29RRzBKSDhCNXFBZjhoNzVPcnpTME1Oa05lVWZoSkIwYjlRZzZLTFVZNExHQ200T3VJRjhaQ0o4UXdXZml6VHl6aHpoQlIwQm5qeDJhQXRKdE4yeUFONlhMaXEwUDZ3UHYvaTN4SUJJRzM4M1RlZG54TVdXZk4rU0NUU2ZNek1JSS9xWmUyRUhoZFVRbzMvZ3cvcE1OaXMvYlBMYmlJUUk5VExWME1Qb1ZsNE43bURMYzhMU25kbjBYZ2IxRExBWGJIZmc3RnM2dlMwUnJrcEorRmpLRTdZZ2VDb1JZSS9vUDdrdkFjcVNiR3BlVldsdHlyNklLM1VCT0ZmdHFlNWYzL1IxQklkeERLUXV2T21rbnZqSWpnSmlkRHdNVktPQWNQRldCS3h0NmxycXN5SW8vK3UzMFlrU2FLZnRCWFpQNng1eEpObElYR3R5RUU0c1V2eEtyMW1tSVB1V2RPSGpWdnVIMFVKaGZKYXliaGtiRG1hb1Y5Q3BLdzZKenJIVWp2RmlmMlVEYzQxeXlTbHlQOUdRc3J6MXVJazVpdi93MXUvTjZIMXhSRCtGbFpyRmN5clVXcVJWT0NGWHczTVVKb2F2Qk8vbFVmRWpmdDk4V2xBPT0mdEVhaitYd3hZTG5lejdoQndwYXo4WUhwYVVBPQ==; _b="AWDx3fBYO15Exr9izqWM8YO4XbCW4PiFZ0nXFy0/mHGNDsPQkB+qh7jp+qYEU4kbHpU="'
        };
        try {
            if (args[0]){   
            const embed = new MessageEmbed()
                    .setColor('RED')
                    .setDescription('Nhập tên waifu bạn đi chứ :?')
                if (!error && response.statusCode == 200) {
                    if (!args[0]) return message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
                }
                }
        } catch (e) {
            console.error(e)
            console.log(e)
            message.reply('Tớ bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍 ')
        }
        
        if (args == "sumi") {
            var options = {
                url: `https://www.pinterest.com/search/pins/?q=anime ${args[0]}`,
                headers: headers
            };
            try {
                function callback(error, response, body) {
                const waifu = new MessageEmbed()
                const images = body.match(/https:\/\/i\.pinimg\.com\/originals\/[^.]+\.jpg/g);
                waifu.setAuthor(`Có thể đây là ảnh vợ bạn😳🤔`, client.user.displayAvatarURL())
                waifu.setImage(` ${images[Math.floor(Math.random() * images.length)]} `)    
                    .setColor('RANDOM')
                    .setTimestamp()
                    .setFooter({ text: 'Maybe bị sai 🐧🤔'});
                message.reply({embeds: [waifu], allowedMentions: {repliedUser: false}})
            }
            } catch {
                console.error
            }
    request(options, callback);
        }else {
            message.channel.send('bruh')
            return
        }
    }

}
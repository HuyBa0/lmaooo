const { MessageEmbed} = require('discord.js');
const config = require('../../Data/config.json');
const ms= require('ms')
const name = 'mute'
module.exports = {
    name: 'mute',
    category: 'Moderator',
    run: (client, message, args) => {
        try {
            function error(error) {
                const embed = new MessageEmbed()
                .setColor('RED')
                .setDescription(error)
                message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
            }
            if (!message.member.permissions.has('MANAGE_ROLES') || !message.member.permissions.has('MANAGE_CHANNELS')) {
                error('Bạn không có quyền dùng lệnh')
                return
            }
            function check(perm) {
                if (message.guild.me.permissions.has(perm)){
                  return true
                } else return false
              }
            
            if (!check('MANAGE_ROLES')){
                error('Mình không có quyền "Manage Roles"')
                return
            }
            if (!check('MANAGE_CHANNELS')) {
                error('Mình không có quyền "Manage Channels"')
            }
        
            if (!args[0]) {
                const error = new MessageEmbed()
                .setColor('RED')
                .setDescription('Thiếu @Người dùng kìa!')
                .addField('Sử dụng',`> \`${config.prefix}${name} + @Người dùng + Lý do <nếu muốn>\``)
                message.reply({embeds: [error], allowedMentions: {repliedUser: false}})
                return
            }
            let target = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if (!target) { return error(`Đây là...${args.join(' ')}...ai vậy?`)

            }
            
            function mute(){
                try{
                    let target = message.mentions.members.first() || message.guild.members.cache.get(args[0])
                    const muterole = message.guild.roles.cache.find(role => role.name === "Muted")
                    if (muterole.position > message.guild.me.roles.highest.position) return error('Tao đéo có quyền thêm role mute')
                    let muted = target.roles.cache.some(role => role.name === "Muted") 
                    if (muted) return error(`${target} bạn này bị mute ròi mà!`)
                    target.roles.add(muterole) 
                    reason = 'Không có'
                    if (args[1]) reason =  (args.slice(1)).join(' ')
                    const embed = new MessageEmbed()
                    .setTitle('Muted')
                    .setThumbnail(target.user.displayAvatarURL())
                    .setColor('RED')
                    .addField('Bạn đã bị mute', `> ${target}`)
                    .addField('Bị mute bởi', `> ${message.author}`)
                    .addField('Lý do', `> ${reason}`)
                    .setFooter('Thời gian bị mute', client.user.displayAvatarURL())
                    .setTimestamp()
                    target.send({embeds: [embed]}).catch(() => {return})         
                    const embed2 = new MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('Muted')
                    .setThumbnail(target.user.displayAvatarURL())
                    .addField('Người dùng bị mute', `> ${target}`)
                    .addField('Bị mute bởi', `> ${message.author}`)
                    .addField('Lý do', `> ${reason}`)
                    .setFooter('Thời gian bị mute', client.user.displayAvatarURL())
                    .setTimestamp()
                    message.channel.send({embeds: [embed2], allowedMentions: {repliedUser: false}})                                    
                }catch(e){return (`Sức mạnh này là sao...hắn...${target.user.username}..mạnh quá không mute được!`)                                 
            }} 
                        
            
    
            //Check role
            let role = message.guild.roles.cache.find(role => role.name === "Muted");
            let create = new Boolean(false)
            if (!role) {
                error('Không có role "Muted:')
                const embed = new MessageEmbed()
                .setColor('YELLOW')
                .setDescription('Đang khởi tạo role "Muted"........')
                create = true
                message.channel.send({embeds: [embed], allowedMentions: {repliedUser: false}}).then(message => {
                    setTimeout(function(){
                        message.guild.roles.create({
                            name: 'Muted',
                            color: 'Black',
                            reason: 'Mute role',
                          }).then(role => {
                            const text = message.guild.channels.cache.filter(c => 
                                (c.type === "GUILD_TEXT"))
                            var textid = Array.from(text)
                                for (var i of textid) {
                                    var txid = i.shift().toString()
                                    var tx = client.channels.cache.get(txid)
                                    tx.permissionOverwrites.create(
                                        role,
                                        { 'SEND_MESSAGES': false },
                                        'Mute'
                                    )
                                }
                                const voice = message.guild.channels.cache.filter(c => 
                                    (c.type === "GUILD_VOICE") || (c.type === "GUILD_STAGE_VOICE"))
                                var voiceid = Array.from(voice)
                                    for (var i of voiceid) {
                                        var vcid = i.shift().toString()
                                        var vc = client.channels.cache.get(vcid)
                                        vc.permissionOverwrites.create(
                                            role,
                                            { 'CONNECT': false },
                                            'Mute'
                                        )
                                    }                                
                                })
                        const embed2 = new MessageEmbed()
                        .setColor('GREEN')
                        .setDescription('Đã tạo thành công✔')
                        message.edit({embeds: [embed2], allowedMentions: {repliedUser: false}})
                        mute()
                    }, 3000)
                    return
                })
            }
            if (create == false) mute()
        } catch (e) {
            error('Tớ bị lỗi gì đó thì phải <:kamar_real:900380903635841034> 👍 ')
            console.error(e)
            console.log(e)
        }
    }
}
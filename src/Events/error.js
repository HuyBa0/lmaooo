const { MessageEmbed } = require("discord.js")

function error(error) {
    const embed = new MessageEmbed()
        .setColor('RED')
        .setDescription(`<:cross_:948091612767064085> ${error}`)
        message.reply({embeds: [embed]})
}
module.exports = {
    error,
}
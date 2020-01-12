const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
//

exports.run = (client, message, params) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (message.channel.type !== "dm") {
    const kralol = new Discord.RichEmbed()
      .setAuthor(" Artık Kral Oldun!")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("")
      .setURL("")
      .setImage(`https://media.giphy.com/media/F0uvYzyr2a7Li/giphy.gif`);
    return message.channel.sendEmbed(kralol);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kralol",
  description: "kralol",
  usage: "kralol"
};
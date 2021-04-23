const { MessageEmbed } = require("discord.js");
  
exports.conf = {
    enabled: true,
    permLevel: 0,
    aliases: ["yetenek"]
    }
exports.help = {
  name: "ability"
  }

exports.run = async (client, message, args) => {
  if(!["805566975874826330", "805524161945796658"].some(role => message.member.roles.cache.has(role)) && !message.member.hasPermission("ADMINISTRATOR"))
    return;
  
  const troya = new MessageEmbed().setColor("00FFE7").setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}));
  
  if(message.channel.id !== '833360173019562014') return message.reply(`bu komut sadece <#833360173019562014> kanal�0�3nda kullan�0�3labilir.`).then(x => x.delete({timeout: 5000}))
  if(!args[0]) return message.reply("bir kullan�0�3c�0�3 belirtmelisin.").then(x => x.delete({timeout: 5000}))
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if(!member) return message.reply("belirtilen kullan�0�3c�0�3y�0�3 bulam�0�3yorum.").then(x => x.delete({timeout: 5000}))
  
  if(member.id === client.user.id) return message.reply("bot ��zerinde i�0�6lem yapamazs�0�3n.").then(x => x.delete({timeout: 5000}))
  
  //SAYILARIN OLDU�0�5U HANELERDE SOL TARAFTA BEL�0�2RT�0�2LEN ROL�0�5N ID'S�0�2N�0�2 G�0�2RMEN�0�2Z GEREK�0�2R.
  let role = {
    "yaz�0�3l�0�3m": "814131159595614249",
    "ressam": "805524204459393034",
    "vokal": "805524199993114635",
    "piyanist": "805524201519316993",
    "actor": "805524205285146634",
    "yazar": "805524197815877652",
    "��flemeli": "805524198897221692",
    "baterist": "805524200609284148",
    "beatboxer": "805524202496983070",
    "telli": "805524203675582534"
    }
//SA�0�5 TARAFTAK�0�2 HANELERE, EMOJ�0�2N�0�2N TAM UZANTISINI G�0�2RMEN�0�2Z GEREK�0�2R.
  let emoji = {
    "bir": "<:1_:833081647808512030>",
    "iki": "<:2_:833082980426711130>",
    "���0�4": "<:3_:833083004435300412>",
    "d�0�2rt": "<:4_:833083031970643978>",
    "be�0�6": "<:5_:833083053369720862>",
    "alt�0�3": "<:6_:833083080667037696>",
    "yedi": "<:7_:833083108676206682>",
    "sekiz": "<:8_:833083129366577202>",
    "dokuz": "<:9_:833083211730911302>",
    "on": "<:10:833083247570190356>",
    "hay�0�3r": "<:redd:833105736296038420>",
    "evet": "<:onayy:783287793014669313>"
    }
//A�0�5AGIDAKI HANELERE, SAYI EMOJ�0�2LER�0�2N�0�2N SUNUCUDAK�0�2 MEVCUT �0�2S�0�2MLER�0�2N�0�2 G�0�2RMEN�0�2Z GEREK�0�2R.
  let filter = (reaction, user) => {
    return ["1_", "2_", "3_", "4_", "5_", "6_", "7_", "8_", "9_", "10", "�0�7"].includes(reaction.emoji.name) && user.id === message.author.id;
    }
  
  let kontrol1;
  if(member.roles.cache.has(role.yazılım)){
    kontrol1 = `**�7�7**`
    } else { kontrol1 = `` }
  let kontrol2;
  if(member.roles.cache.has(role.ressam)){
    kontrol2 = `**�7�7**`
    } else { kontrol2 = `` }
  let kontrol3;
  if(member.roles.cache.has(role.vokal)){
    kontrol3 = `**�7�7**`
    } else { kontrol3 = `` }
  let kontrol4;
  if(member.roles.cache.has(role.piyanist)){
    kontrol4 = `**�7�7**`
    } else { kontrol4 = `` }
  let kontrol5;
  if(member.roles.cache.has(role.actor)){
    kontrol5 = `**�7�7**`
    } else { kontrol5 = `` }
  let kontrol6;
  if(member.roles.cache.has(role.yazar)){
    kontrol6 = `**�7�7**`
    } else { kontrol6 = `` }
  let kontrol7;
  if(member.roles.cache.has(role.üflemeli)){
    kontrol7 = `**�7�7**`
    } else { kontrol7 = `` }
  let kontrol8;
  if(member.roles.cache.has(role.baterist)){
    kontrol8 = `**�7�7**`
    } else { kontrol8 = `` }
  let kontrol9;
  if(member.roles.cache.has(role.beatboxer)){
    kontrol9 = `**�7�7**`
    } else { kontrol9 = `` }
  let kontrol10;
  if(member.roles.cache.has(role.telli)){
    kontrol10 = `**�7�7**`
    } else { kontrol10 = `` }
  
//KAYITSIZ �0�5YELERE YETENEK ROLLER�0�2N�0�2N VER�0�2LMES�0�2N�0�2 ENGELLEYECEK B�0�2T�0�2RME FONKS�0�2YONU BURADA BA�0�5LIYOR. A�0�5A�0�5IDAK�0�2 HANEYE KAYITSIZ ROL�0�5N�0�5N ID'S�0�2N�0�2 G�0�2R�0�2N�0�2Z.
  if(member.roles.cache.has("805524212299202580")) {
    message.channel.send(troya.setDescription(`${emoji.hay�0�3r} Daha kay�0�3t olmam�0�3�0�6 ki�0�6ilere yetenek rol�� verilemez!`)).then(x => x.delete({timeout: 6000}))
    return;
    } else {
      message.channel.send(troya.setDescription(`${member} ��yesine verilecek veya al�0�3nacak yetenek rol��n��, belirtilen tepkilere t�0�3klayarak ger�0�4ekle�0�6tirebilirsin.

${emoji.bir} <@&${role.yaz�0�3l�0�3m}> ${kontrol1}
${emoji.iki} <@&${role.ressam}> ${kontrol2}
${emoji.���0�4} <@&${role.vokal}> ${kontrol3}
${emoji.d�0�2rt} <@&${role.piyanist}> ${kontrol4}
${emoji.be�0�6} <@&${role.actor}> ${kontrol5}
${emoji.alt�0�3} <@&${role.yazar}> ${kontrol6}
${emoji.yedi} <@&${role.��flemeli}> ${kontrol7}
${emoji.sekiz} <@&${role.baterist}> ${kontrol8}
${emoji.dokuz} <@&${role.beatboxer}> ${kontrol9}
${emoji.on} <@&${role.telli}> ${kontrol10}
                                 
\`�6�1 Not:\` �0�2�0�6lem 20 saniye sonra iptal edilecektir, yanl�0�3�0�6 yetenek rol��n�� verdi�0�6ini d���0�6��n��yorsan tekrar t�0�3klayarak alabilirsin.
`).setThumbnail(`${member.user.avatarURL({dynamic: true})}`))
      .then(async mesaj => {
//A�0�5A�0�5IDAK�0�2 HANELERE SIRASIYLA 1-10 EMOJ�0�2LER�0�2N�0�2N ID'LER�0�2N�0�2 G�0�2RMEN�0�2Z GEREK�0�2R.
        await mesaj.react("833081647808512030")
        await mesaj.react("833082980426711130")
        await mesaj.react("833083004435300412")
        await mesaj.react("833083031970643978")
        await mesaj.react("833083053369720862")
        await mesaj.react("833083080667037696")
        await mesaj.react("833083108676206682")
        await mesaj.react("833083129366577202")
        await mesaj.react("833083211730911302")
        await mesaj.react("833083247570190356")
        await mesaj.react("�0�7")
        
        let bekleme = mesaj.createReactionCollector(filter, {
          time: 30000,
          idle: 20000,
          })
                  
        bekleme.on('collect', async (reaction, user) => {
          const bruh = reaction.emoji.name;
          
          if(bruh === "1_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.yaz�0�3l�0�3m)) {
              member.roles.add(role.yaz�0�3l�0�3m)
              message.channel.send(`${emoji.evet} **${member.user.tag}** ��yesine **Yaz�0�3l�0�3m** rol�� verildi! ${message.author}`)
              } else {
                member.roles.remove(role.yaz�0�3l�0�3m)
                message.channel.send(`${emoji.hay�0�3r} **${member.user.tag}** ��yesinden **Yaz�0�3l�0�3m** rol�� al�0�3nd�0�3! ${message.author}`)
                }
            }
          
          if(bruh === "2_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.ressam)) {
              member.roles.add(role.ressam)
              message.channel.send(`${emoji.evet} **${member.user.tag}** ��yesine **Ressam & Tasar�0�3m** rol�� verildi! ${message.author}`)
              } else {
                member.roles.remove(role.ressam)
                message.channel.send(`${emoji.hay�0�3r} **${member.user.tag}** ��yesinden **Ressam & Tasar�0�3m** rol�� al�0�3nd�0�3! ${message.author}`)
                }
            }
          
          if(bruh === "3_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.vokal)) {
              member.roles.add(role.vokal)
              message.channel.send(`${emoji.evet} **${member.user.tag}** ��yesine **Vokal** rol�� verildi! ${message.author}`)
              } else {
                member.roles.remove(role.vokal)
                message.channel.send(`${emoji.hay�0�3r} **${member.user.tag}** ��yesinden **Vokal** rol�� al�0�3nd�0�3! ${message.author}`)
                }
            }
          
          if(bruh === "4_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.piyanist)) {
              member.roles.add(role.piyanist)
              message.channel.send(`${emoji.evet} **${member.user.tag}** ��yesine **Piyanist** rol�� verildi! ${message.author}`)
              } else {
                member.roles.remove(role.piyanist)
                message.channel.send(`${emoji.hay�0�3r} **${member.user.tag}** ��yesinden **Piyanist** rol�� al�0�3nd�0�3! ${message.author}`)
                }
            }
          
          if(bruh === "5_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.actor)) {
              member.roles.add(role.actor)
              message.channel.send(`${emoji.evet} **${member.user.tag}** ��yesine **Voice Actor** rol�� verildi! ${message.author}`)
              } else {
                member.roles.remove(role.actor)
                message.channel.send(`${emoji.hay�0�3r} **${member.user.tag}** ��yesinden **Voice Actor** rol�� al�0�3nd�0�3! ${message.author}`)
                }
            }
          
          if(bruh === "6_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.yazar)) {
              member.roles.add(role.yazar)
              message.channel.send(`${emoji.evet} **${member.user.tag}** ��yesine **Yazar** rol�� verildi! ${message.author}`)
              } else {
                member.roles.remove(role.yazar)
                message.channel.send(`${emoji.hay�0�3r} **${member.user.tag}** ��yesinden **Yazar** rol�� al�0�3nd�0�3! ${message.author}`)
                }
            }
          
          if(bruh === "7_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.��flemeli)) {
              member.roles.add(role.��flemeli)
              message.channel.send(`${emoji.evet} **${member.user.tag}** ��yesine **�0�5flemeli** rol�� verildi! ${message.author}`)
              } else {
                member.roles.remove(role.��flemeli)
                message.channel.send(`${emoji.hay�0�3r} **${member.user.tag}** ��yesinden **�0�5flemeli** rol�� al�0�3nd�0�3! ${message.author}`)
                }
            }
          
          if(bruh === "8_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.baterist)) {
              member.roles.add(role.baterist)
              message.channel.send(`${emoji.evet} **${member.user.tag}** ��yesine **Baterist** rol�� verildi! ${message.author}`)
              } else {
                member.roles.remove(role.baterist)
                message.channel.send(`${emoji.hay�0�3r} **${member.user.tag}** ��yesinden **Baterist** rol�� al�0�3nd�0�3! ${message.author}`)
                }
            }
          
          if(bruh === "9_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.beatboxer)) {
              member.roles.add(role.beatboxer)
              message.channel.send(`${emoji.evet} **${member.user.tag}** ��yesine **Beatboxer** rol�� verildi! ${message.author}`)
              } else {
                member.roles.remove(role.beatboxer)
                message.channel.send(`${emoji.hay�0�3r} **${member.user.tag}** ��yesinden **Beatboxer** rol�� al�0�3nd�0�3! ${message.author}`)
                }
            }
          
          if(bruh === "10"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.telli)) {
              member.roles.add(role.telli)
              message.channel.send(`${emoji.evet} **${member.user.tag}** ��yesine **Telli �0�5alg�0�3lar** rol�� verildi! ${message.author}`)
              } else {
                member.roles.remove(role.telli)
                message.channel.send(`${emoji.hay�0�3r} **${member.user.tag}** ��yesinden **Telli �0�5alg�0�3lar** rol�� al�0�3nd�0�3! ${message.author}`)
                }
            }
          
          if(bruh === "�0�7"){
            mesaj.delete();
            }
          })
        
        bekleme.on('end', () => {
          mesaj.delete();
          })
        })
       
      }
      
  };
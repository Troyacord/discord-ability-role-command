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
  
  if(message.channel.id !== '833360173019562014') return message.reply(`bu komut sadece <#833360173019562014> kanalında kullanılabilir.`).then(x => x.delete({timeout: 5000}))
  if(!args[0]) return message.reply("bir kullanıcı belirtmelisin.").then(x => x.delete({timeout: 5000}))
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if(!member) return message.reply("belirtilen kullanıcıyı bulamıyorum.").then(x => x.delete({timeout: 5000}))
  
  if(member.id === client.user.id) return message.reply("bot üzerinde işlem yapamazsın.").then(x => x.delete({timeout: 5000}))
  
  //SAYILARIN OLDUĞU HANELERDE SOL TARAFTA BELİRTİLEN ROLÜN ID'SİNİ GİRMENİZ GEREKİR.
  let role = {
    "yazılım": "814131159595614249",
    "ressam": "805524204459393034",
    "vokal": "805524199993114635",
    "piyanist": "805524201519316993",
    "actor": "805524205285146634",
    "yazar": "805524197815877652",
    "üflemeli": "805524198897221692",
    "baterist": "805524200609284148",
    "beatboxer": "805524202496983070",
    "telli": "805524203675582534"
    }
//SAĞ TARAFTAKİ HANELERE, EMOJİNİN TAM UZANTISINI GİRMENİZ GEREKİR.
  let emoji = {
    "bir": "<:1_:833081647808512030>",
    "iki": "<:2_:833082980426711130>",
    "üç": "<:3_:833083004435300412>",
    "dört": "<:4_:833083031970643978>",
    "beş": "<:5_:833083053369720862>",
    "altı": "<:6_:833083080667037696>",
    "yedi": "<:7_:833083108676206682>",
    "sekiz": "<:8_:833083129366577202>",
    "dokuz": "<:9_:833083211730911302>",
    "on": "<:10:833083247570190356>",
    "hayır": "<:redd:833105736296038420>",
    "evet": "<:onayy:783287793014669313>"
    }
//AŞAGIDAKI HANELERE, SAYI EMOJİLERİNİN SUNUCUDAKİ MEVCUT İSİMLERİNİ GİRMENİZ GEREKİR.
  let filter = (reaction, user) => {
    return ["1_", "2_", "3_", "4_", "5_", "6_", "7_", "8_", "9_", "10", "🚫"].includes(reaction.emoji.name) && user.id === message.author.id;
    }
  
  let kontrol1;
  if(member.roles.cache.has(role.yaz谋l谋m)){
    kontrol1 = `**✓**`
    } else { kontrol1 = `` }
  let kontrol2;
  if(member.roles.cache.has(role.ressam)){
    kontrol2 = `**✓**`
    } else { kontrol2 = `` }
  let kontrol3;
  if(member.roles.cache.has(role.vokal)){
    kontrol3 = `**✓**`
    } else { kontrol3 = `` }
  let kontrol4;
  if(member.roles.cache.has(role.piyanist)){
    kontrol4 = `**✓**`
    } else { kontrol4 = `` }
  let kontrol5;
  if(member.roles.cache.has(role.actor)){
    kontrol5 = `**✓**`
    } else { kontrol5 = `` }
  let kontrol6;
  if(member.roles.cache.has(role.yazar)){
    kontrol6 = `**✓**`
    } else { kontrol6 = `` }
  let kontrol7;
  if(member.roles.cache.has(role.眉flemeli)){
    kontrol7 = `**✓**`
    } else { kontrol7 = `` }
  let kontrol8;
  if(member.roles.cache.has(role.baterist)){
    kontrol8 = `**✓**`
    } else { kontrol8 = `` }
  let kontrol9;
  if(member.roles.cache.has(role.beatboxer)){
    kontrol9 = `**✓**`
    } else { kontrol9 = `` }
  let kontrol10;
  if(member.roles.cache.has(role.telli)){
    kontrol10 = `**✓**`
    } else { kontrol10 = `` }
  
//KAYITSIZ ÜYELERE YETENEK ROLLERİNİN VERİLMESİNİ ENGELLEYECEK BİTİRME FONKSİYONU BURADA BAŞLIYOR. AŞAĞIDAKİ HANEYE KAYITSIZ ROLÜNÜN ID'SİNİ GİRİNİZ.
  if(member.roles.cache.has("805524212299202580")) {
    message.channel.send(troya.setDescription(`${emoji.hayır} Daha kayıt olmamış kişilere yetenek rolü verilemez!`)).then(x => x.delete({timeout: 6000}))
    return;
    } else {
      message.channel.send(troya.setDescription(`${member} üyesine verilecek veya alınacak yetenek rolünü, belirtilen tepkilere tıklayarak gerçekleştirebilirsin.

${emoji.bir} <@&${role.yazılım}> ${kontrol1}
${emoji.iki} <@&${role.ressam}> ${kontrol2}
${emoji.üç} <@&${role.vokal}> ${kontrol3}
${emoji.dört} <@&${role.piyanist}> ${kontrol4}
${emoji.beş} <@&${role.actor}> ${kontrol5}
${emoji.altı} <@&${role.yazar}> ${kontrol6}
${emoji.yedi} <@&${role.üflemeli}> ${kontrol7}
${emoji.sekiz} <@&${role.baterist}> ${kontrol8}
${emoji.dokuz} <@&${role.beatboxer}> ${kontrol9}
${emoji.on} <@&${role.telli}> ${kontrol10}
                                 
\`• Not:\` İşlem 20 saniye sonra iptal edilecektir, yanlış yetenek rolünü verdiğini düşünüyorsan tekrar tıklayarak alabilirsin.
`).setThumbnail(`${member.user.avatarURL({dynamic: true})}`))
      .then(async mesaj => {
//AŞAĞIDAKİ HANELERE SIRASIYLA 1-10 EMOJİLERİNİN ID'LERİNİ GİRMENİZ GEREKİR.
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
        await mesaj.react("🚫")
        
        let bekleme = mesaj.createReactionCollector(filter, {
          time: 30000,
          idle: 20000,
          })
                  
        bekleme.on('collect', async (reaction, user) => {
          const bruh = reaction.emoji.name;
          
          if(bruh === "1_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.yazılım)) {
              member.roles.add(role.yazılım)
              message.channel.send(`${emoji.evet} **${member.user.tag}** üyesine **Yazılım** rolü verildi! ${message.author}`)
              } else {
                member.roles.remove(role.yazılım)
                message.channel.send(`${emoji.hayır} **${member.user.tag}** üyesinden **Yazılım** rolü alındı! ${message.author}`)
                }
            }
          
          if(bruh === "2_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.ressam)) {
              member.roles.add(role.ressam)
              message.channel.send(`${emoji.evet} **${member.user.tag}** üyesine **Ressam & Tasarım** rolü verildi! ${message.author}`)
              } else {
                member.roles.remove(role.ressam)
                message.channel.send(`${emoji.hayır} **${member.user.tag}** üyesinden **Ressam & Tasarım** rolü alındı! ${message.author}`)
                }
            }
          
          if(bruh === "3_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.vokal)) {
              member.roles.add(role.vokal)
              message.channel.send(`${emoji.evet} **${member.user.tag}** üyesine **Vokal** rolü verildi! ${message.author}`)
              } else {
                member.roles.remove(role.vokal)
                message.channel.send(`${emoji.hayır} **${member.user.tag}** üyesinden **Vokal** rolü alındı! ${message.author}`)
                }
            }
          
          if(bruh === "4_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.piyanist)) {
              member.roles.add(role.piyanist)
              message.channel.send(`${emoji.evet} **${member.user.tag}** üyesine **Piyanist** rolü verildi! ${message.author}`)
              } else {
                member.roles.remove(role.piyanist)
                message.channel.send(`${emoji.hayır} **${member.user.tag}** üyesinden **Piyanist** rolü alındı! ${message.author}`)
                }
            }
          
          if(bruh === "5_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.actor)) {
              member.roles.add(role.actor)
              message.channel.send(`${emoji.evet} **${member.user.tag}** üyesine **Voice Actor** rolü verildi! ${message.author}`)
              } else {
                member.roles.remove(role.actor)
                message.channel.send(`${emoji.hayır} **${member.user.tag}** üyesinden **Voice Actor** rolü alındı! ${message.author}`)
                }
            }
          
          if(bruh === "6_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.yazar)) {
              member.roles.add(role.yazar)
              message.channel.send(`${emoji.evet} **${member.user.tag}** üyesine **Yazar** rolü verildi! ${message.author}`)
              } else {
                member.roles.remove(role.yazar)
                message.channel.send(`${emoji.hayır} **${member.user.tag}** üyesinden **Yazar** rolü alındı! ${message.author}`)
                }
            }
          
          if(bruh === "7_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.üflemeli)) {
              member.roles.add(role.üflemeli)
              message.channel.send(`${emoji.evet} **${member.user.tag}** üyesine **Üflemeli** rolü verildi! ${message.author}`)
              } else {
                member.roles.remove(role.üflemeli)
                message.channel.send(`${emoji.hayır} **${member.user.tag}** üyesinden **Üflemeli** rolü alındı! ${message.author}`)
                }
            }
          
          if(bruh === "8_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.baterist)) {
              member.roles.add(role.baterist)
              message.channel.send(`${emoji.evet} **${member.user.tag}** üyesine **Baterist** rolü verildi! ${message.author}`)
              } else {
                member.roles.remove(role.baterist)
                message.channel.send(`${emoji.hayır} **${member.user.tag}** üyesinden **Baterist** rolü alındı! ${message.author}`)
                }
            }
          
          if(bruh === "9_"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.beatboxer)) {
              member.roles.add(role.beatboxer)
              message.channel.send(`${emoji.evet} **${member.user.tag}** üyesine **Beatboxer** rolü verildi! ${message.author}`)
              } else {
                member.roles.remove(role.beatboxer)
                message.channel.send(`${emoji.hayır} **${member.user.tag}** üyesinden **Beatboxer** rolü alındı! ${message.author}`)
                }
            }
          
          if(bruh === "10"){
            reaction.users.remove(message.author.id)
            if(!member.roles.cache.has(role.telli)) {
              member.roles.add(role.telli)
              message.channel.send(`${emoji.evet} **${member.user.tag}** üyesine **Telli Çalgılar** rolü verildi! ${message.author}`)
              } else {
                member.roles.remove(role.telli)
                message.channel.send(`${emoji.hayır} **${member.user.tag}** üyesinden **Telli Çalgılar** rolü alındı! ${message.author}`)
                }
            }
          
          if(bruh === "🚫"){
            mesaj.delete();
            }
          })
        
        bekleme.on('end', () => {
          mesaj.delete();
          })
        })
       
      }
      
  };

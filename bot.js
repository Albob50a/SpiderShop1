const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});



 client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == 'لون'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
   .setColor(`ff0000`)
 
    if(!isNaN(args) && args.length > 0)
   
 
if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
 
 
       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                   
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
         
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
       
           
    }
});

  client.on('message', msg => {//msg
    if (msg.content === 'الوان') {
      msg.channel.send({file : "https://cdn.discordapp.com/attachments/579101020672491541/579523937931624449/colors.png"})
    }
  });

  client.on('message', msg => {//msg
    if (msg.content === 'الالوان') {
      msg.channel.send({file : "https://cdn.discordapp.com/attachments/579101020672491541/579523937931624449/colors.png"})
    }
  });


////////////////تجربه اكواد

var config = {
  events: [
    {type: "CHANNEL_CREATE", logType: "CHANNEL_CREATE", limit: 99999 , delay: 3000},
    {type: "CHANNEL_DELETE", logType: "CHANNEL_DELETE", limit: 2, delay: 3000},
    {type: "GUILD_MEMBER_REMOVE", logType: "MEMBER_KICK", limit: 5, delay: 3000},
    {type: "GUILD_BAN_ADD", logType: "MEMBER_BAN_ADD", limit: 5, delay: 3000}
  ]
}
client.on("raw", (packet)=> {
  let {t, d} = packet, type = t, {guild_id} = data = d || {};
  if (type === "READY") {
    client.startedTimestamp = new Date().getTime();
    client.captures = [];
  }
  let event = config.events.find(anEvent => anEvent.type === type);
  if (!event) return;
  let guild = client.guilds.get(guild_id);
  if (!guild) return;
  guild.fetchAuditLogs({limit : 1, type: event.logType})
    .then(eventAudit => {
      let eventLog = eventAudit.entries.first();
      if (!eventLog) return;
      let executor = eventLog.executor;
      guild.fetchAuditLogs({type: event.logType, user: executor})
        .then((userAudit, index) => {
          let uses = 0;
          userAudit.entries.map(entry => {
            if (entry.createdTimestamp > client.startedTimestamp && !client.captures.includes(entry.id)) uses += 1;
          });
          setTimeout(() => {
            client.captures.push(index);
          }, event.delay || 2000)
          if (uses >= event.limit) {
            client.emit("reachLimit", {
              user: userAudit.entries.first().executor,
              member: guild.members.get(executor.id),
              guild: guild,
              type: event.type,
            })
          }
        }).catch(console.error)
    }).catch(console.error)
});
client.on("reachLimit", (limit)=> {
  let log = limit.guild.channels.find( channel => channel.name === "ｎｏｒｍａｎｄｙ");
  log.send(limit.user.username+"\ try to hack !! @everyone !!");
  limit.guild.owner.send(limit.user.username+"\ حاول التهكير الحقق (!)")
  limit.member.roles.map(role => {
    limit.member.removeRole(role.id)
    .catch(log.send)
  });
});

var filterWords = [
    "anal",
    "anus",
    "arse",
    "nigger",
    "nigga",
    "ballsack",
    "balls",
    "bastard",
    "bitch",
    "biatch",
    "blowjob",
    "blow job",
    "bollock",
    "bollok",
    "boner",
    "boob",
    "bugger",
    "bum",
    "buttplug",
    "clitoris",
    "cock",
    "coon",
    "cunt",
    "dick",
    "dildo",
    "dyke",
    "fag",
    "feck",
    "fellate",
    "fellatio",
    "felching",
    "fucker",
    "fucking",
    "fuck",
    "f u c k",
    "fudgepacker",
    "fudge packer",
    "flang",
    "homo",
    "jizz",
    "knobend",
    "knob end",
    "labia",
    "muff",
    "penis",
    "prick",
    "pube",
    "pussy",
    "queer",
    "scrotum",
    "sex",
    "shit",
    "s hit",
    "sh1t",
    "slut",
    "smegma",
    "fucken",
    "spunk",
    "tit",
    "tosser",
    "turd",
    "twat",
    "vagina",
    "wank",
    "whore",
    "mofucker",
    "niger"
];

client.on('message', message => {
var prefix = "!";
if(message.content === `${prefix}voiceonline`) {
  message.guild.createChannel(`Voice Online : ${message.guild.members.filter(g => g.voiceChannel).size} ` , "voice").then(c => {
   c.overwritePermissions(message.guild.id, {CONNECT: false});
    message.channel.send(`**Voice Online : ${message.guild.members.filter(g => g.voiceChannel).size}**`);
    setInterval(() => {
    c.setName(`Voice Online : ${message.guild.members.filter(g => g.voiceChannel).size} `)
    },600000);
  })

}
});



client.on("message", message => {
            switch (true) {
                case message.author.bot:
                    return;
                case new RegExp(filterWords.join("|")).test(message.content.toLowerCase()):
                    const guild = client.guilds.find(guild => guild.id);
                    let edit = message.content.toLowerCase();
                    for (var i in filterWords) {
                        edit = edit.replace(new RegExp(filterWords[i], "g"), "`*****`");
                    }
                    message.delete();
                    message.channel.send("يمنع الشتائم في سيرفرنا");
            }
	});


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '579109625530679296').setName("┏");
client.channels.find('id', '579109625530679296').setName("┏●");
client.channels.find('id', '579109625530679296').setName("┏●i");
client.channels.find('id', '579109625530679296').setName("┏●in");
client.channels.find('id', '579109625530679296').setName("┏●in-");
client.channels.find('id', '579109625530679296').setName("┏●in-f");
client.channels.find('id', '579109625530679296').setName("┏●in-fo");
client.channels.find('id', '579109625530679296').setName("┏●in-fo●");
client.channels.find('id', '579109625530679296').setName("┏●in-fo●┓");
  }, 3000);
});
	
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","friend"));
    });
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","NORMANDY"));
    });

client.on('message', message => {
	var prefix = "!";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'سحب')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});



 /////////////////////////////////////////////وامر عامه

client.on('message' , message => {
if(message.content === '!help') {
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
message.author.send(`
**__وصف عن البوت__**
**
[❖─═════ {✯ :globe_with_meridians: الأوامر العامه ✯} ═════─❖]
اذا منشنت البوت يرد عليك ➥: منشن البوت
!ping :➥ لمعرفة سرعة استجابة البوت في الوقت الحالي
!server :➥ يعرض معلومات السيرفر
!id :➥ يعرض معلوماتك
!image :➥ يعرض صورت السيرفر
!avatar :➥ يظهر صورة بروفايلك
!new :➥ امر فتح  تذكرة
[❖─═════ {✯ :radioactive: اوامر الاداره ✯} ═════─❖]
!bc :➥ برودكاست مطور
يقفل الشات ➥: !قفل
يفتح الشات ➥: !فتح
يمسح الشات ➥: !مسح
سحب العضو➥: !سحب
امر الباند ➥: !باند
لاعطاء ميوت كتابي وصوتي لشخص ➥: !اسكت
لفك الميوت الكتابي و الصوتي عن الشخص ➥: !تكلم
لمسح جميع الترب الملونة ➥: dcol!
[❖─═════ {✯ :tools: البوت مازال تحت التطوير ✯} ═════─❖]
**
`);
}
})

client.on('message', ra3d => {
var prefix = "!";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });






client.on('ready', function(){
    var ms = 40000 ;
    var setGame = [`${client.guilds.size} Server`,' NORMANDY ',`${client.users.size} Members`,'By:DrTriCk'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/DrTriCk`);
    }, ms);
    console.log(` ╔═══╗──╔╗ |> Name: ${client.user.username}`);
 console.log(` ║╔═╗║──║║ |> Servers: ${client.guilds.size}`);
 console.log(` ║║─╚╬══╣║╔══╦╗╔╦╗─╔╗ |> Members: ${client.users.size}`);
 console.log(` ║║╔═╣╔╗║║║╔╗╠╬╬╣║─║║║ |> Channels: ${client.channels.size}`);
 console.log(` ║╚╩═║╔╗║╚╣╔╗╠╬╬╣╚═╝║ |> Channels: ${client.channels.size}`);
 console.log(` ╚═══╩╝╚╩═╩╝╚╩╝╚╩═╗╔╝ |> Id: ${client.user.id}`);
 console.log(` ───────────────╔═╝║`);
 console.log(` ───────────────╚══╝`);
});





client.on('message', message => {
            if (message.content.startsWith("!help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     Help ' ,' **تم ارسال الاوامر الي الخاص ✉**')
.setColor('#B101FC')
  message.channel.sendEmbed(embed);
    }
});



client.on('message', function(msg) {
    const prefix = '!'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });




client.on("message", message => {
    const prefix = "!"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });



client.on('message', message => {
    if (message.content.startsWith("!avatar")) {
        if (message.author.bot) return
        var mentionned = message.mentions.users.first();
    var omar;
      if(mentionned){
          var omar = mentionned;
      } else {
          var omar = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor('Avatar Link :')
        .setTitle('Click Here')
        .setURL(`${omar.avatarURL}`)
        .setImage(`${omar.avatarURL}`)
        .setFooter('name bot',client.user.avatarURL) 
      message.channel.sendEmbed(embed);
    }
});



client.on("message", msg => {
  if(msg.content === '!' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true);
      msg.channel.send({embed: embed})
  }
});



client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("!new")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **تم إنشاء تذكرتك ، #${c.name}.**`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`مرحباّ ${message.author.username}!`, `يرجي شرح سبب فتح هذا التذكرة . سيكون فريق الدعم لدينا قريبا للمساعدة`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("!close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
        message.channel.send(`هل أنت متأكد؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!\n للتأكيد ، اكتب\`!close\`. سيؤدي ذلك إلى مهلة زمنية في غضون 10 ثوانٍ وإلغائها`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '!close', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })    /// ALPHA CODES
                    .then((collected) => {
                        message.channel.delete();
                    })    /// ALPHA CODES
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
 
});



client.on('message' , message => {
  var prefix = "!";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });
 



/////////////////////////////////////////////وامر اداريه






client.on("message", message => {
var prefix = "!" // البريفكس
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "مسح")) { // الامر
        if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {
  
}
}}).then(msg => {msg.delete(3000)});
                  }


});




client.on('message', message => {

    if (message.content === "!قفل") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ✅ ")
           });
             }
if (message.content === "!فتح") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات ✅")
           });
             }



});





client.on('message', message => {
    var prefix = "!";
          if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "Boardcast Bot";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
 
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
m.send(args)
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});







client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "!اسكت") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي وصوتي**").catch(console.error);
  });
    }
  
  };
  
  });

//////////////////////

client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "!تكلم") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  });
    }
  
  };
  
  });












//////////////////////////////////////////////////////////اوامر صاحب البوت

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('!bcc')){
 if (message.author.id !== '387107653148475393') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});






//////////////////////////////////////////////////////////اوامر الرد التلقائي و البوت


client.on('message', msg => {
  if(msg.content === 'باك')
              setTimeout(function() {  
msg.reply('**̨ولكم احلا باك للغالي**')
              }, 00)
});
client.on('message', msg => {
  if(msg.content === 'هلا')
              setTimeout(function() {  
msg.reply('**هلا حبي**')
              }, 00)
});
client.on('message', msg => {
  if(msg.content === 'السلام عليكم')
              setTimeout(function() {  
msg.reply('**وعليكم السلام ورحمة الله وبركاتة**')
              }, 00)
});
client.on('message', msg => {
  if(msg.content === 'مساء الخير')
              setTimeout(function() {  
msg.reply('**مساء الهنا والسرور للغالي **')
              }, 00)
});
client.on('message', msg => {
  if(msg.content === 'صباح الخير')
              setTimeout(function() {  
msg.reply('**صباح ورد ياأغلي الناس **')
              }, 00)
});
client.on('message', msg => {
  if(msg.content === 'برب')
              setTimeout(function() {  
msg.reply('**وقتما تعود ستجدنا في انتظارك اعتني بنفسك وكن سعيد **')
              }, 00)
});

client.on('message', msg => {
  if(msg.content === 'اشرس')
              setTimeout(function() {  
msg.reply('**بس يلا**')
              }, 00)
});


client.on("guildMemberAdd", member => { 
        if(member.guild.id === "579089974838689812") { 
setTimeout(function(){ 
  const channel = member.guild.channels.find('id', '579089974838689812');  
if (!channel) return; 
  channel.send(`**Welcome To [__NORMANDY__]:shopping_cart:** ❤️ , ${member}`) 
}, 5000);  
}});  



const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "normandy");
    logChannel.send(`${member} **Invited by:** <@${inviter.id}>`);
  });
});





///////////////////////////////////////////////////اوامر ممنوع تعملها


////يبند اي شخص ينشر



client.on('message',function(message) {
  if(!message.channel.guild) return undefined;
  const swearWords = ["كل زق","كل خرا","كسمك","كلب","متناك"];
  if (swearWords.some(word => message.content.includes(word)) ) {
    message.delete()
    message.reply("ممنوع السب"); 
  }
});





////////////////////////////////اشياء اخري

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  **ولكم نورت السيرفر**:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})



  client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`**الله معاك ✋ 😔**`)
        .setDescription(`**مع السلامه تشرفنا بك ✋😔**`)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`- نـتـمـنـآ لـكـم آسـتـمــتـآع -`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
   
    var channel =member.guild.channels.find('name', 'chat')
    if (!channel) return;
    channel.send({embed : embed});
    })



client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 10 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});
 
  







const cuttweet = [
    'كت تويت  | تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
    'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
    'كت تويت | الحرية لـ ... ؟',
    'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
    'كت تويت  | كلمة للصُداع؟',
    'كت تويت  | ما الشيء الذي يُفارقك؟ ',
    'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
    'كت تويت أيهما ينتصر، الكبرياء أم الحب؟',
    'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
    'كت تويت  | مِن أغرب وأجمل الأسماء التي مرت عليك؟',
    'كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
    'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
    'كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
    'كت تويت | وش يفسد الصداقة؟',
    'كت تويت | شخص لاترفض له طلبا ؟',
    'كت تويت | كم مره خسرت شخص تحبه؟.',
    'كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
    'كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
    'كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
    'كت تويت |أقوى كذبة مشت عليك ؟',
    'كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
    'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
    'كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
    'كت تويت | اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
    'كت تويت | وش محتاج عشان تكون مبسوط ؟',
    'كت تويت | مطلبك الوحيد الحين ؟',
    'كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
  if (message.content.startsWith("!كت تويت")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL) 
.addField('لعبه كت تويت' ,
 `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('[id] Send By: ' + message.author.username)
   }
});







     client.on('message', async message => {
            if(message.content.includes('discord.gg')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})






 client.on('message', async message => {
            if(message.content.includes('.com')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر روابط ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})




























client.on('message', async message => {
  if(message.author.bot) return;
  let prefix = '!';

  let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if(!message.content.toLowerCase().startsWith(prefix)) return;

  if(command == 'dcol') {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`لاتمتلك الصلاحيات لفعل ذلك! :x:`);
    message.channel.send("جاري المسح..").then(async m => {
      await message.guild.roles.forEach(role => {
        if(/^\d+$/gi.test(role.name)) {
          role.delete();
        }
      });
      await m.edit(`تم إزالة جميع الالوان.`)
    });
  }
});


























// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

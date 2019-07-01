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
client.channels.find('id', '595047963236106253').setName("W");
client.channels.find('id', '595047963236106253').setName("WE");
client.channels.find('id', '595047963236106253').setName("WEL");
client.channels.find('id', '595047963236106253').setName("WELC");
client.channels.find('id', '595047963236106253').setName("WELCO");
client.channels.find('id', '595047963236106253').setName("WELCOM");
client.channels.find('id', '595047963236106253').setName("WELCOME");
  }, 2500);
});



client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '595034134565355522').setName("S");
client.channels.find('id', '595034134565355522').setName("Sp");
client.channels.find('id', '595034134565355522').setName("Spi");
client.channels.find('id', '595034134565355522').setName("Spid");
client.channels.find('id', '595034134565355522').setName("Spide");
client.channels.find('id', '595034134565355522').setName("Spider");
  }, 2500);
});
	

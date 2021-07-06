const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "s!";

Client.on("ready", () => {
    console.log("Bot opérationnel");
});

//Message d'acceuil (pour plus d'info sur l'object guild.member : https://discord.js.org/#/docs/main/stable/class/GuildMember) ps: si tu veu activer la fonction message d'acceuil suprime les /* et */ de la ligne 12 et 21
Client.on("guildMemberAdd", membre => {
    console.log("Un nouveau membre est arrivé");
    membre.guild.channel.cache.find(channel => channel.id === "821473653203402812").send(member.displayName + "Bienvenu(e)!/nNous sommes désormais **"+ member.guild.memberCount +"** sur le serveur" );
    member.roles.add("824289366460989461").then(nbr => {
        
    }) 
});

Client.on("guildMemberRemove", membre => {
    console.log("Un membre nous a quité");
    membre.guild.channel.cache.find(channel => channel.id === "821473653203402812").send(member.displayName + "Au revoir ||:sob:||/nNous sommes désormais **"+ member.guild.memberCount +"** sur le serveur");
});


    /* MESSAGES */
//(plus d'info sur l'object message https://discord.js.org/#/docs/main/stable/class/Message)
Client.on("message",message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    /* COMMANDES */
    if(message.content == prefix + " ping"){
        message.channel.send("pong");
    }

    if(message.content == prefix + " amam"){
        message.channel.send("Joyeu aniv a toi mon frère pour tes 17 ans je te souhaite tt le bonneur que ta envie et de réussir dans ta vie et qu'on passe des moment de ouf et tt ensemble. En résumé longue vie a toi mon frère  ")
    }

    /*if(message.content == prefix + "stats"){
       message.channel.send(message.author.username + " qui a pour id : " + message.author.id + " a posté ce message");
    }*/

    if(message.content == prefix + " stats"){
        message.reply(" qui a pour id : ||" + message.author.id + "|| a posté ce message");
    }
     
    if(message.content == prefix + " annonce"){
        client.Discord.channel.get("821069136234807367").send (Discord.message);
    }

});


Client.login("ODIxMDY4NDY2ODMxNjIyMjM0.YE-VmQ.y0_fK2rQthjXrZhzv7xOApgf6jk");
const { EmbedBuilder, ActionRowBuilder, ButtonStyle, StingSelectMenuBuilder, Events, ButtonBuilder, editEmbed, Collection } = require("discord.js");
const MusicBot = require("./structures/Client");
const client = new MusicBot();
const GiveawayManager = require("./handlers/GiveawayManager");
client.connect()
const util = require('./handlers/util');
const config = require('./config');

client.util = new util(client);
client.giveawaysManager = new GiveawayManager(client);
client.emoji = {
  'tick': '<:x_tick:1247940882599116905>',
  'cross': '<:x_cross:1247589697056935987>',
  'dot': '<a:x_dot:1247589958600888332>',
  'giveaway': '<:x_gift:1247590129921556520>',
  'music': '<:x_music:1247940471364255794>',
  'volumehigh': '<:x_speak:1247940837308895385>',
  'play': '<:x_pause:1247940674347860069>',
  'stop': '<:x_play:1247940744438743213>',
  'skip': '<:x_right:1247940787128373299>',
  'resume': '<:x_play:1247940744438743213>'
};

client.userSettings = new Collection();
client.color = 'cc0000';

module.exports = client;

client.on(Events.InteractionCreate, async interaction => {

    if (!interaction.isStringSelectMenu()) return;

    process.on('unhandledRejection', (reason, p) => {
        console.log(reason, p);
    });

    process.on('uncaughtException', (err, origin) => {
        console.log(err, origin);
    });

    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(err, origin);
    });

    let options = interaction.values;
    let funny = options[0];

    if(funny === 'seven') {
        const embed7 = new EmbedBuilder()
            .setColor(client.color)
            .setFooter({ text: `Requested by ` + interaction.member.user.username, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true }) })
            .setAuthor({name: `Help Panel`, iconURL: client.user.displayAvatarURL()})
            .setTitle("**__Image__**")
            .setDescription(`\n\n\`achi, fuck, slap, cat, dog, meeting\`\n\n`);
        interaction.update({embeds: [embed7], ephemeral: true});
        return;
    }

    if(funny === 'sixth') {
        const embed6 = new EmbedBuilder()
            .setAuthor({name:`Help Panel`, iconURL:client.user.displayAvatarURL()})
            .setTitle("**__Moderation__**")
            .setDescription(`\n\n\`lock, unlock, lockall, unlockall, hide, unhide, hideall, unhideall, ban, hackban, unban, unbanall, kick, mute, unmute, purge, nuke, purgebots\`\n\n`)
            .setThumbnail(client.user.displayAvatarURL())
            .setColor(client.color)
            .setTimestamp()
            .setFooter({ text: `Requested by ` + interaction.member.user.username, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true })});
        interaction.update({ embeds: [embed6], ephemeral: true });
        return;
    }

    if(funny === 'fifth') {
        const embed2 = new EmbedBuilder()
            .setAuthor({name:`Help Panel`, iconURL:client.user.displayAvatarURL()})
            .setDescription(`
            <:Add:1265733942556758037> Prefix on this server: \`${prefix}\`
            <:Add:1265733942556758037> Type **\`${prefix}\`help** for more info
            <:Add:1265733942556758037> Total commands: \`${client.commands.size}\`
            **[Invite Me](${config.links.invite}) | [Support HQ](${config.links.support})**
            `)
            .addFields([
                {
                    name: `**__ <:Category:1265733980918120563> Main Categories__**`,
                    value: `
                    <:StatusRole:1265734031102840964> Information
                    <:StatusRole:1265734031102840964>Music
                    <:StatusRole:1265734031102840964> Voice`,
                }
            ])
            .setThumbnail(client.user.displayAvatarURL())
            .setImage("https://media.discordapp.net/attachments/1278007019185639597/1278266682414075926/Copy_of_arisa_1.gif?ex=66e6979e&is=66e5461e&hm=be93f27aeacaf0a1c3d3c2b90cd2261a4c53e1479100e69fdb4d7373c4c05eac&width=765&height=270&")
            .setColor(client.color)
            .setFooter({ text: `Requested by ` + interaction.member.user.username, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true })});
        interaction.update({ embeds: [embed2], ephemeral: true });
        return;
    }

    if(funny === 'first') {
        const embed4 = new EmbedBuilder()
            .setAuthor({name:`Help Panel`, iconURL:client.user.displayAvatarURL()})
            .setTitle("**__Information__**")
            .setDescription(`\n\n\`about, invite, ping, \`\n\n`)
            .setThumbnail(client.user.displayAvatarURL())
            .setColor(client.color)
            .setTimestamp()
            .setFooter({ text: `Requested by ` + interaction.member.user.username, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true })});
        interaction.update({ embeds: [embed4], ephemeral: true });
        return;
    }

    if(funny === 'second') {
        const embed5 = new EmbedBuilder()
            .setAuthor({name:`Help Panel`, iconURL:client.user.displayAvatarURL()})
            .setTitle("**__Music__**")
            .setDescription(`\n\n\`play, join, leave, loop, Autoplay, pause, lyrics, nowplaying, previous, queue, resume, skip, remove, seek, volume, search, shuffle, grab, skipto, clearqueue, 247, filters, p_create, p_delete, p_savecurrent, p_savequeue, p_removetrack, p_load, p_info, p_list\`\n\n`)
            .setThumbnail(client.user.displayAvatarURL())
            .setColor(client.color)
            .setTimestamp()
            .setFooter({ text: `Requested by ` + interaction.member.user.username, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true })});
        interaction.update({ embeds: [embed5], ephemeral: true });
        return;
    }

    if(funny === 'fourth') {
        const embed6 = new EmbedBuilder()
            .setAuthor({name:`Help Panel`, iconURL:client.user.displayAvatarURL()})
            .setTitle("**__Settings__**")
            .setDescription(`\n\n\`adddj, removedj, toggledj, prefix\`\n\n`)
            .setThumbnail(client.user.displayAvatarURL())
            .setColor(client.color)
            .setTimestamp()
            .setFooter({ text: `Requested by ` + interaction.member.user.username, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true })});
        interaction.update({ embeds: [embed6], ephemeral: true });
        return;
    }


  if(funny === 'eleventh') {
  const embed6 = new EmbedBuilder()
    .setAuthor({name:`Help Panel`,
      iconURL:client.user.displayAvatarURL()})
    .setTitle("**Voice**")
      .setDescription(`\n\n\`vcmute, vcunmute, vcdeafen, vcundeafen, vckick, vclist, vcmove\`\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.color)
    .setTimestamp()
    .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})

        interaction.update({ embeds: [embed6], ephemeral: true })
        return
  }
  if(funny === 'owner') {
    const embed6 = new EmbedBuilder()
      .setAuthor({name:`Help Panel`,
        iconURL:client.user.displayAvatarURL()})
      .setTitle("**__Owner__**")
        .setDescription(`\n\n\`eval, leaveserver, noprefix, reload, say, serverlist\`\n\n`)
    .setThumbnail(client.user.displayAvatarURL())
      .setColor(client.color)
      .setTimestamp()
      .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})

          interaction.update({ embeds: [embed6], ephemeral: true })
          return
      }

module.exports = client;
})

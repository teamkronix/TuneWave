const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");
const config = require('../../config');

module.exports = {
    name: "help",
    category: "Information",
    aliases: ["h"],
    description: "",
    args: false,
    usage: "",
    userPerms: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
        const embeds = generateEmbeds(client, prefix);
        await pagination(message, embeds);
    }
};

function generateEmbeds(client, prefix) {
    const helpEmbed = new EmbedBuilder()
        .setAuthor({ name: `Help Panel`, iconURL: client.user.displayAvatarURL() })
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
        .setColor(client.color)
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/1278007019185639597/1278266682414075926/Copy_of_arisa_1.gif?ex=66e6979e&is=66e5461e&hm=be93f27aeacaf0a1c3d3c2b90cd2261a4c53e1479100e69fdb4d7373c4c05eac&width=765&height=270&");

    const embeds = [
        helpEmbed,
        new EmbedBuilder()
            .setAuthor({ name: `Help Panel`, iconURL: client.user.displayAvatarURL() })
            .setTitle("**Information \`[20]\`**")
            .setDescription(`
            \`invite, ping, stats, help, afk, status, owner\`
            `)
            .setColor(client.color)
            .setTimestamp(),

        new EmbedBuilder()
            .setAuthor({ name: `Help Panel`, iconURL: client.user.displayAvatarURL() })
            .setTitle("**Music \`[30]\`**")
            .setDescription(`
            \`play, join, leave, loop, Autoplay, pause, lyrics, nowplaying, previous,
            queue, resume, skip, remove, seek, volume, search, shuffle, grab, skipto,
            clearqueue, 247, filters, p_create, p_delete, p_savecurrent, p_savequeue,
            p_removetrack, p_load, p_info, p_list\`
            `)
            .setColor(client.color)
            .setTimestamp(),

        new EmbedBuilder()
            .setAuthor({ name: `Help Panel`, iconURL: client.user.displayAvatarURL() })
            .setTitle("**Voice \`[6]\`**")
            .setDescription(`
            \`vcdeafen, vcundeafen, vclist, vcmute, vcunmute, vckick\`
            `)
            .setColor(client.color)
            .setTimestamp(),
    ];

    return embeds;
}

async function pagination(message, embeds) {
    const menu = new StringSelectMenuBuilder()
        .setCustomId('helpop')
        .setPlaceholder('🕊️ | Click to Browse Commands!')
        .addOptions([
            { label: 'Home', value: 'home', emoji: '<:StatusRole:1265734031102840964>', description: 'Go Back To The Home Page' },
            { label: 'Information', value: 'information', emoji: '<:StatusRole:1265734031102840964>', description: 'Get All Information Commands' },
            { label: 'Music', value: 'music', emoji: '<:StatusRole:1265734031102840964>', description: 'Get All Music Commands' },
            { label: 'Voice', value: 'voice', emoji: '<:StatusRole:1265734031102840964>', description: 'Get All Voice Commands' },
        ]);

    const row = new ActionRowBuilder().addComponents(menu);
    const currentPage = await message.channel.send({ embeds: [embeds[0]], components: [row] });

    const collector = currentPage.createMessageComponentCollector({ time: 60000 });

    collector.on('collect', async i => {
        if (i.user.id !== message.author.id) {
            return await i.reply({ content: "This interaction isn't for you!", ephemeral: true });
        }

        const embedIndex = getEmbedIndex(i.values[0]);
        await i.update({ embeds: [embeds[embedIndex]], components: [row] });
    });

    collector.on('end', () => currentPage.edit({ components: [] }));
}

function getEmbedIndex(selectedValue) {
    const embedMap = {
        'home': 0,
        'information': 1,  // Updated indices
        'music': 2,
        'voice': 3
    };
    return embedMap[selectedValue] ?? 0;  // Fallback to 0 if invalid value
}

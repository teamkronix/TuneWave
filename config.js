require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "MTI3Njk0ODE2OTM0Mjg0OTA3NA.GkjEnu.iXtZ5fUkB7j1XHUwahhfLcp27BdX5cgiz3-LKQ",
    clientID: process.env.CLIENT_ID || "1276948169342849074", 
    prefix: process.env.PREFIX || ".", 
    ownerID: process.env.OWNER_ID || "747321055319949312",
    guildID: process.env.GUILD_ID || "",
    SpotifyID: process.env.SPOTIFY_ID || "e6f84fbec2b44a77bf35a20c5ffa54b8",
    SpotifySecret: process.env.SPOTIFY_SECRET || "498f461b962443cfaf9539c610e2ea81",
    mongourl: process.env.MONGO_URL || "mongodb+srv://kronix:kronix@cluster0.v3dmc2z.mongodb.net/?retryWrites=true&w=majority",
    embedColor: process.env.EMBED_COLOR || 0xcc0000,
    logs: process.env.LOGS || "qdewdqe",
    logs1: process.env.LOGS1 || "e   edf wfre",
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "32456786543234567",
    buglogschannel: process.env.BUG_LOGS_CHANNEL || "435678654321234567",
    SearchPlatform: "youtube",
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER ||"youtube ,youtube music,youtube,soundcloud",
    links: {
        img: process.env.IMG || 'https://discord.com/channels/1247444478512336896/1247444478713659421/1254450678152167425', 
        support: process.env.SUPPORT || 'https://discord.gg/coderplanet',
        invite: process.env.INVITE || 'https://discord.com/oauth2/authorize?client_id=1200011771151396864&permissions=856556554545&scope=applications.commands%20bot' 
    },
    nodes: [
           {
            host: process.env.NODE_HOST || "v3.lavalink.rocks",
            port: parseInt(process.env.NODE_PORT || "80"),
            password: process.env.NODE_PASSWORD || "horizxon.tech",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
            }
           ],

}


function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",
    clientID: process.env.CLIENT_ID || "", 
    prefix: process.env.PREFIX || ".", 
    ownerID: process.env.OWNER_ID || "",
    SpotifyID: process.env.SPOTIFY_ID || "",
    SpotifySecret: process.env.SPOTIFY_SECRET || "",
    mongourl: process.env.MONGO_URL || "",
    embedColor: process.env.EMBED_COLOR || 0xcc0000,
    logs: process.env.LOGS || "",
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "",
    buglogschannel: process.env.BUG_LOGS_CHANNEL || "",
    SearchPlatform: "youtube",
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER || "youtube, youtube music, soundcloud",
    links: {
        img: process.env.IMG || '', 
        support: process.env.SUPPORT || '',
        invite: process.env.INVITE || '' 
    },
    nodes: [
        {
            host: process.env.NODE_HOST || "",
            port: parseInt(process.env.NODE_PORT || "80"),
            password: process.env.NODE_PASSWORD || "",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
        }
    ],
};

function parseBoolean(value) {
    if (typeof value === 'string') {
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

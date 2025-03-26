const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Mock function to get stream URL based on channel name
function getStreamURL(channelName) {
    const streams = {
        'TV Derana': 'https://edge2-moblive.yuppcdn.net/transhd2/smil:detv04.smil/playlist.m3u8',
        // Add more channels and their stream URLs here
    };
    return streams[channelName];
}

app.get('/getStream', (req, res) => {
    const channelName = req.query.channel;
    const streamURL = getStreamURL(channelName);

    if (streamURL) {
        res.json({ streamURL });
    } else {
        res.status(404).send('Channel not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
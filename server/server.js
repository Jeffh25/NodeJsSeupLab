const path = require("path");
const fs = require("fs");
const request = require("request");

// let chirpPath = path.join(__dirname, '../chips.json');

let thisArr = [
    {
        user: "heyman",
        message: "hey",
    },
    {
        user: "boogeyman",
        message:
        "can you keep the noise down, i have a family down here now, yes just like you I grew up also.",
    },
    {
        user: "thealmosttrendingtopic",
        message: `they don't say it to my face but people think im a big deal`,
    },
    {
        user: "marvfromstatefrom",
        message: `I don't know why people think that Jake guy is so cool and gets to be in the commercials, he doesn't eve be wearing khakis fr.`,
    },
    {
        user: "chetubetcha",
        message: `"I'm Chet Ubetcha saying my tire is flat and we'll never get back to the studio in time. This is Chet Ubetcha saying 'I'll do the news from right here.'"`
    }
];
fs.writeFile('chirps.json', JSON.stringify(thisArr) , (err) => {
    if (err) throw err;
    console.log('Saved')
})

fs.readFile('chirps.json', (err, data) => {
    if (err) throw (err);
    // let posts = ;

    console.log(JSON.parse(data))
})

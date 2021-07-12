let path = require("path");
let fs = require("fs");
let request = require("request");

let chirpPath = path.join(__dirname, '../chips.json');

fs.readFileSync(chirpPath, { encoding: 'utf8'}), (err, data) => {
    let posts = JSON.parse(data);

    console.log(posts.thisArr)
}
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

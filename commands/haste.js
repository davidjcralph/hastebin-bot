const fetch = require("node-fetch");

exports.run = (client, msg, args) => {
    if (!args[0]) return msg.channel.send(":x: I can't post nothing to Hastebin!");
    fetch(`https://hastebin.com/documents`, { 
        method: 'POST',
        body: args.slice(0).join(" "), 
        headers: { 
            'Content-Type': 'application/json' 
        } 
    })
      .then(res => res.json())
      .then(json => {
            msg.channel.send(`:white_check_mark: Posted text to Hastebin at this URL: https://hastebin.com/${json.key}`);
      });
}

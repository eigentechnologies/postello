const express = require('express');
const fetch = require('node-fetch');
const SlackBot = require('slackbots');

require('dotenv').config()

// dev mode
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

const running = true;

const bot = new SlackBot({
  token: process.env.SECRET_KEY,
  name: 'Postello'
});

bot.on('start', () => {
  console.log('Slack Bot started.')
});

// lets the front-end know that the server is running.
// TODO: Find a better way to do this.
app.get('/', (req, res) => {
  res.send({running})
})

app.get('/users', (req, res) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => res.send(data))
})

app.get('/slackusers', (req, res) => {
  bot.getUsers()
    .then(x => res.send(x.members
      .filter(item => {
        return item.is_bot === false && item.deleted === false
      })
      .map(y => ({
        id: y.name,
        name: y.profile.real_name,
        img: y.profile.image_24,
        tz: y.tz
    }))
    ));
})

app.get('/slack/:id', (req, res) => {
  const parames = {
    icon_emoji: ':package:'
  };
  const id = req.params.id;
  bot.postMessageToChannel('postello-hackday-test', `there is a parcel for ${id}!`, parames);
  bot.postMessageToUser(id, 'there is a parcel for you!', parames);
  res.send('sent!!')  
})

// initialize server
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`)
})

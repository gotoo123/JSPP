const express = require('express');
const {join} = require('path');
const router = require('./router');

const app = express();
app.use(router);

app.set('view engine', 'ejs');

app.use(express.static(join(__dirname, 'public')))

app.get('/html_text', (req, res) => {
  const title = 'This is a html text';
  const list = [
    {
      id: '1',
      name: 'Mike',
      age: '5',
      score: '5',
    },
    {
      id: '2',
      name: 'Jack',
      age: '6',
      score: '6',
    },
    {
      id: '3',
      name: 'Jenny',
      age: '7',
      score: '7',
    }
  ]

  res.send(
    `
      <!doctype html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="./css/static.css">
      </head>
      <body>
        <div id="app">
          <h1>${title}</h1>
          <ul>
            ${
              list.map(item => (
                '<li>' +
                '<p> ID:' + item.id + '</p>' +
                '<p> Name: ' + item.name + '</p>' +
                '<p> Age: ' + item.age + '</p>' +
                '<p> Score: ' + item.score + '</p>' +
                '</li>'
              )).join('')
            }
          </ul>
        </div>
      <script src="./js/static.js"></script>
      </body>
      </html>
    `
  )
})

app.get('/html.ejs', (req, res) => {
  const title = 'This is a html text';
  const list = [
    {
      id: '1',
      name: 'Mike',
      age: '5',
      score: '5',
    },
    {
      id: '2',
      name: 'Jack',
      age: '6',
      score: '6',
    },
    {
      id: '3',
      name: 'Jenny',
      age: '7',
      score: '7',
    }
  ]

  res.render('html', {
    title,
    list
  });
})

app.listen(8080, (res, req) => {console.log('ok')});
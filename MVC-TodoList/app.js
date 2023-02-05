const express = require('express');
const {join} = require('path');
const {router} = require('./router');

const app = express();

app.use(router);
app.use(express.static(join(__dirname, 'public')))
app.set('view engine', 'ejs');

app.listen(8080, () => {
  console.log('Server is runnung on 8080.')
})
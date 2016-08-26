var express = require('express');
var app = express();

app.use('/', express.static('./'));
app.use('*', express.static('./index.html'));

app.listen(3001, () => {
  console.log('App running on port 3001');
});

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.get('*', function (req, res) {
    const index = path.join(__dirname, 'dist', 'index.html');
    res.sendFile(index);
});
  

app.listen(process.env.PORT || 8080);


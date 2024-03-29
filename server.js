const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  console.log('Matched wildcard route!');
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(port);

const express = require('express');
const app = express();
const port = 8080;

const demoRedirects = {
  // 'sonicboom': 'https://demo.sam.gl/sonicboom',
  // 'hermes': 'https://hermes.example.com'
};

const codeRedirects = {
  'sonicboom': 'https://github.com/samhynds/sonicboom',
  'hermes': 'https://github.com/samhynds/hermes-react',
  'netwatch': 'https://github.com/samhynds/NetWatch'
};

app.get('/', (req, res) => {
  if(demoRedirects[req.query?.demo]) {
    res.redirect(308, demoRedirects[req.query?.demo])
  } else if(codeRedirects[req.query?.code]) {
    res.redirect(308, codeRedirects[req.query?.code])
  } else {
    res.send('This is a redirect service for sam.gl');
  }
});

app.listen(port, () => {
  console.log(`SamGL Redirect app listening on port ${port}`)
});

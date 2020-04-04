const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(`${__dirname}/public`));

app.get('/', (req,res) => {
  res.sendFile('views/home.html', {
    root: __dirname
  })
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

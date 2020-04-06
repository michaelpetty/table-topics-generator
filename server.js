const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(`${__dirname}/public`));

app.get('/', (req,res) => {
  res.sendFile('views/home.html', {
    root: __dirname
  })
})

// temp data
const tempQuestion = {id: 1, account_id: 1, content: 'What is your favorite color? And how is that choice reflected in your life?', name: 'Jimmy'};

app.get('/api/v1/questions', (req, res) => res.json({status: 200, message:'i got your questions', data: {}}));

app.get('/api/v1/questions/:id', (req, res) => {
  if (req.params.id === 'random') {
    res.json({status: 200, message: 'one random question', data: tempQuestion})
  } else {
    res.json({status: 200, message: `data for question id: ${req.params.id}`, data: {}})
  }

})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

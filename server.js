const express = require('express');
require('dotenv').config();
const db = require('./models')

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static(`${__dirname}/public`));

app.get('/', (req,res) => {
  res.sendFile('views/home.html', {
    root: __dirname
  })
})

// temp data
const tempList = [
  {question_id: 1, account_id: 1, content: 'What is your favorite color? And how is that choice reflected in your life?', name: 'Jimmy'},
  {question_id: 2, account_id: 1, content: 'What is your superpower??', name: 'Jimmy'},
  {question_id: 3, account_id: 1, content: 'What is your patronus (Harry Potter reference) or personal icon, and why??', name: 'Jimmy'},
  {question_id: 4, account_id: 1, content: 'What is your favorite movie of all time?', name: 'Jimmy'},
  {question_id: 5, account_id: 1, content: 'Tell us about your favorite pair of socks (or shirt, pants, etc). What makes them special?', name: 'Jimmy'},
  {question_id: 6, account_id: 1, content: 'If you could go anywhere, where would it be?', name: 'Jimmy'},
];

app.get('/api/v1/questions', (req, res) => res.json({status: 200, message:'i got your questions', data: {}}));

app.get('/api/v1/questions/:id', (req, res) => {
  if (req.params.id === 'random') {
    const randomIndex = Math.floor(Math.random() * tempList.length);
    res.json({status: 200, message: 'one random question', data: tempList[randomIndex]})
  } else {
    res.json({status: 200, message: `data for question id: ${req.params.id}`, data: tempList[req.params.id]})
  }

})

app.get('/api/v1/accounts', async (req, res) => {
  try {
  await db.Account.sync();
  const accounts = await db.Account.findAll();
  res.json(accounts);
} catch (err) {
  console.error(err);
}
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello dari Backend Dummy! Tugas selesai.' });
});

app.listen(3001, () => console.log('Backend nyala di 3001'));

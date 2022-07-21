import * as express from 'express';

export const app = express();

app.get('/countries', (req, res) => {
  res.json({ message: 'countries data should go here' });
});

app.get('/universities', (req, res) => {
  res.json({ message: 'universities data should go here' });
});

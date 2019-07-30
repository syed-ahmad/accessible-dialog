import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3500;

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public')));
app.use('/timeout', express.static(path.join(__dirname, 'public/timeout')));
app.get('/', (req, res, err) => {
  res.status(200).json({ message: 'Welcome to accessible dialog!' });
});

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);

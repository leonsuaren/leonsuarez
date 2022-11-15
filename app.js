require('dotenv').config({ path: './.config.env' });
const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send({message: 'App working'});
});

app.listen(PORT, () => {
  console.log(`App listining on port ${PORT}`);
});
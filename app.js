require('dotenv').config({ path: './.config.env' });
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');


const PORT = process.env.PORT;

const projectRouter = require('./routes/projects');
const contactRouter = require('./routes/contacts');
const adminRouter = require('./routes/admin');

connectDB();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/projects', cors(), projectRouter);
app.use('/api/contacts', cors(), contactRouter);
app.use('/api/admin', cors(), adminRouter);

app.get('/', (req, res) => {
  res.send({message: 'App working'});
});

app.listen(PORT, () => {
  console.log(`App listining on port ${PORT}`);
});
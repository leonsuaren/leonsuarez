require('dotenv').config({ path: './.config.env' });
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');


const PORT = process.env.PORT;

const projectRouter = require('./routes/projects');
const contactRouter = require('./routes/contacts');
const adminRouter = require('./routes/admin');
const profileInfoRouter = require('./routes/profileInfo');
const downloadsRouter = require('./routes/downloads');

connectDB();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/projects', cors(), projectRouter);
app.use('/api/contacts', cors(), contactRouter);
app.use('/api/admin', cors(), adminRouter);
app.use('/api/profile', cors(), profileInfoRouter);
app.use('/api/downloads', cors(), downloadsRouter);

app.get('/', (req, res) => {
  res.send({message: 'App working'});
});

app.listen(PORT, () => {
  console.log(`App listining on port ${PORT}`);
});
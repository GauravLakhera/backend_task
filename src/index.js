const express = require('express');
const cors = require('cors');
const taskRoute = require('../Routes/taskRoute.js');
const app = express();
const connectDB = require('../db/index.js');

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoute);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log('MONGO db connection failed !!! ', err);
  });

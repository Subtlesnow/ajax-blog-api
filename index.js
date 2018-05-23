const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(morgan('dev'));

app.get('/', (request, response) => {
  response.send("Aax blog is working");
})

app.listen( PORT, () => {
  console.log(`Live on ${PORT}`)
})

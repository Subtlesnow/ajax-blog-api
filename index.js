const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3005;
const blogpostRoutes = require('./routes/blogposts');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/', blogpostRoutes);

app.get('/', (request, response) => {
  response.send("Ajax blog is working");
})

app.listen( PORT, () => {
  console.log(`Live on ${PORT}`)
})

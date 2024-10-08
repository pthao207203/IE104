const express = require('express');

require('dotenv').config();

//const routeAdmin = require("./routes/admin/index.route");
const routeClient = require("./routes/client/index.route");

const database = require("./config/database");
database.connect();


const app = express()
const port = process.env.PORT;

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/static', express.static('public'))

// routeAdmin(app);
routeClient(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
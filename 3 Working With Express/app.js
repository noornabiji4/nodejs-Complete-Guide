const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes)
app.use(shopRouter)

app.listen(3000)

const express = require('express');
const mysql = require('mysql');
const path = require('path');
const morgan = require('morgan');
const myConnection = require('express-myconnection');

const app = express();


app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(morgan('dev'));
// DB connection
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'Temporal2020*',
    port: '3306',
    database: 'contactscrud'
}, 'single'));

// Routes
const contactsRouter = require("./routes/contacts");
app.use("/", contactsRouter);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
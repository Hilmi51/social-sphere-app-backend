const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 3000;
const cors = require('cors');
const hpp = require('hpp');
const xss = require('xss-clean');
const helmet = require('helmet');
const routes = require('./routes');

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(xss());
app.use(hpp(undefined));
app.use(cors());

/*
app.use(limitAccess({
    windowMs: 10 * 60 * 1000, // 10 Minutes
    max: 500
}));

app.use(`*`, (req, res, next) => {
    next();
});
*/

app.use("/api", routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

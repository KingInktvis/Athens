const express = require('express');
const app = express();
const router = require('./routes');
router(app);

const PORT = 5000;
app.listen(PORT);
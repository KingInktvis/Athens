const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = require('./routes');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/athens');

app.use(bodyParser.json({ type: '*/*' }));
app.use(cors());
router(app);

const PORT = 5000;
app.listen(PORT);
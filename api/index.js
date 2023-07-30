const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

dotenv.config();

const port = process.env.PORT || 8080;
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const chatRoute = require('./routes/chat');
const messageRoute = require('./routes/message');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to MongoDB');
});

app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/chats', chatRoute);
app.use('/api/messages', messageRoute);

const imgStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: imgStorage});

app.post('/api/upload', upload.single('file'), (req, res) => {
    try{
        return res.status(200).json('File Uploaded!');
    } catch (error){
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;




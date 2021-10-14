require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({
    useTempFiles: true
}))

//connect to MONGODB
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}, err =>{
    if(err) throw err;
    console.log('connected to mongodb')
})

//Routes
app.use('/user', require('./routes/userRouter'));

const PORT = process.env.PORT || 8080
app.listen(PORT, () =>{
    console.log('port is running on port', PORT)
})


const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bees3030:mybees03@nodereact-loy96.mongodb.net/<NodeReact>?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
 .then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

app.get('/',(req, res)=> res.send('Hello world!'));

app.listen(port,() => console.log(`app listening on port ${port}`));
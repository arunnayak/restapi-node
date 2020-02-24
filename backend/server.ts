import express = require('express');
import cors = require('cors');
import mongoose = require('mongoose');

require('dotenv').config();

const app: express.Application = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const uri = process.env.ATLAS_URI || '';
mongoose.connect(uri, mongooseOptions)
        .then(() => {
            console.log('connected to database');
        }, function(error: Error){
            console.log('error connecting database');
            console.log(error);
        });

import exerciseRouter from './routes/exercises';
import userRouter from './routes/users';

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})
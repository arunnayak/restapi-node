import * as cors from "cors";
import * as express from "express";
import * as mongoose from "mongoose";
import { ATLAS_URI } from './config';

const app = express();
const port = process.env.PORT || 3000;
app.set("port", port);
app.use(cors());
app.use(express.json());

app.get('/', (req: any, res:any) => {
    res.send("API Home");
});

const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(ATLAS_URI, mongooseOptions)
    .then(() => {
        console.log('connected to database');
    }, function (error: Error) {
        console.log('error connecting database');
        console.log(error);
    });

app.listen(app.get("port"), () => {
    console.log(`app is listening on port ${port} and mode is ${process.env.NODE_ENV} / to change port or env / PORT=8080 / NODE_ENV=production node server.js to `);
});


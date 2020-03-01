import * as bodyParser from 'body-parser';
import * as cors from "cors";
import * as express from "express";
import * as mongoose from "mongoose";
import * as swaggerUi from 'swagger-ui-express';
import { ATLAS_URI } from './config';
import * as userController from './controllers/userController';
import * as swaggerDocument from './swagger.json';

const app = express();
const port = process.env.PORT || 8080;
app.set("port", port);
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req: any, res:any) => {
    res.send("Tech trainers API Home");
});

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/swagger/api', userController.addUser);

app.get('/users', userController.allUsers);
app.get('/user/:id', userController.getUser);
app.post('/user', userController.addUser);
app.delete('/user/:id', userController.deleteUser);
app.put('/user/:id', userController.updateUser);

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


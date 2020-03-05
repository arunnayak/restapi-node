import * as bodyParser from 'body-parser';
import * as cors from "cors";
import * as express from "express";
import * as mongoose from "mongoose";
import * as swaggerUi from 'swagger-ui-express';
import { ATLAS_URI } from './config';
import { UserRoutes } from './routes/userRoutes';
import * as swaggerDocument from './swagger.json';

class App {

    public app: express.Application = express();
    public routePrv: UserRoutes = new UserRoutes();

    constructor() {
        this.config();
        this.mongoSetup();
        this.swaggerSetup();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use(express.json());
    }
    private createHomePage(msg: string): void {
        this.app.get('/', (req: any, res: any) => {
            res.send(`
            <h3>Tech trainers API Home</h3>
            <div>${msg}</div>
            <a href='/swagger'>Swagger</a>`
            );
        });
    }
    private swaggerSetup(): void {
        this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }
    private mongoSetup(): void {
        const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        mongoose.connect(ATLAS_URI, mongooseOptions)
            .then(() => {
                // console.log('connected to database');
                this.createHomePage('Connected to database');
            }, function (error: Error) {
                // console.log('error connecting database');
                this.createHomePage(`Error connecting database <br/> ${error}`);
                // console.log(error);
            });
    }

}

export default new App().app;
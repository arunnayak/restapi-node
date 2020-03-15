import * as connectMongo from 'connect-mongo';
import * as session from 'express-session';
import * as http from 'http';
import * as mongoose from "mongoose";
import app from './app';

const {
    PORT = 8000,
    SESSION_NAME = 'sid',
    SESSION_SECRET = 'shh! some\'quiet please',
    NODE_ENV = 'development'
} = process.env;

const IN_PROD = NODE_ENV === 'production';
const SESSION_LIFETIME: number = 1000 * 60 * 10; // milliseconds * seconds * how many minutes
const store = connectMongo(session);
app.use(session({
    name: SESSION_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    store: new store({
        mongooseConnection: mongoose.connection
    }),
    cookie: {
        maxAge: SESSION_LIFETIME,
        sameSite: true,
        secure: IN_PROD
    }
}))
// const httpsOptions = {
//     key: fs.readFileSync('./key.pem'),
//     cert: fs.readFileSync('./cert.pem')
// }

http.createServer(app).listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});

import app from './app';
import * as http from 'http';
import * as fs from 'fs';

const PORT = process.env.PORT || 8080;

// const httpsOptions = {
//     key: fs.readFileSync('./key.pem'),
//     cert: fs.readFileSync('./cert.pem')
// }

http.createServer(app).listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});

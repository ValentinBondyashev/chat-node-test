import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
import { routes } from './routes/index';

class App {
    private static instance: App;
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    public static getInstance(): App {
        if (!App.instance) {
            App.instance = new App();
        }

        return App.instance;
    }


    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use('/', routes);
    }
}

export default App.getInstance().app;

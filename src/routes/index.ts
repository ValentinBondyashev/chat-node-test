import * as express from 'express';
import { apiRoutes } from './api';

class Routes {
    public router: express.Router = express.Router();

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.use('/api', apiRoutes);
    }
}

export const routes = new Routes().router;

import * as express from 'express';
import { testRoutes } from './test';

class ApiRoutes {
    public router: express.Router = express.Router();

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.use('/test', testRoutes);
    }
}

export const apiRoutes = new ApiRoutes().router;
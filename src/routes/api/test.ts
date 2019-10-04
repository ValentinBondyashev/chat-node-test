import * as express from 'express';
import { TestController } from '../../controllers';

export class TestRoutes {
    public router: express.Router = express.Router();
    private testController: TestController = new TestController();

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.get('/', this.testController.sendMessage);
    }
}

export const testRoutes = new TestRoutes().router;

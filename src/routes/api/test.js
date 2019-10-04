"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var controllers_1 = require("../../controllers");
var TestRoutes = /** @class */ (function () {
    function TestRoutes() {
        this.router = express.Router();
        this.testController = new controllers_1.TestController();
        this.config();
    }
    TestRoutes.prototype.config = function () {
        this.router.get('/', this.testController.sendMessage);
    };
    return TestRoutes;
}());
exports.TestRoutes = TestRoutes;
exports.testRoutes = new TestRoutes().router;

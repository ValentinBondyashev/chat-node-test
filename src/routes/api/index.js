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
var test_1 = require("./test");
var ApiRoutes = /** @class */ (function () {
    function ApiRoutes() {
        this.router = express.Router();
        this.config();
    }
    ApiRoutes.prototype.config = function () {
        this.router.use('/test', test_1.testRoutes);
    };
    return ApiRoutes;
}());
exports.apiRoutes = new ApiRoutes().router;

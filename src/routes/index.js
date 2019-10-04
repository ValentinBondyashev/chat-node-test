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
var api_1 = require("./api");
var Routes = /** @class */ (function () {
    function Routes() {
        this.router = express.Router();
        this.config();
    }
    Routes.prototype.config = function () {
        this.router.use('/api', api_1.apiRoutes);
    };
    return Routes;
}());
exports.routes = new Routes().router;

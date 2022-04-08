"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = require("./middlewares/cors");
// import { origins } from "../utils/constants";
const routes_1 = require("./routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Express = require("express");
const functions = require("firebase-functions");
// firebase initialize
require("./utils/firebase");
const constants_1 = require("../utils/constants");
// REST API routes
routes_1.routes.forEach((routerObj) => {
    const app = Express();
    app.use(cookieParser());
    app.use(cors_1.cors);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use((req, res, next) => {
        res
            .setHeader("Cache-Control", "private")
            .setHeader("Access-Control-Allow-Origin", constants_1.origins.find((o) => o === req.header("Origin")));
        next();
    });
    // export routes individually for cloud functions
    app.use(routerObj.router);
    exports[routerObj.name] = functions.region("europe-west1").https.onRequest(app);
});
//# sourceMappingURL=index.js.map
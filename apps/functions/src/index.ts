import { cors } from "./middlewares/cors";
// import { origins } from "../utils/constants";
import { routes } from "./routes";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as Express from "express";
import * as functions from "firebase-functions";

// firebase initialize
import "./utils/firebase";
import { origins } from "../utils/constants";

// REST API routes
routes.forEach((routerObj) => {
  const app = Express();

  app.use(cookieParser());
  app.use(cors);
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );

  app.use((req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    res
      .setHeader("Cache-Control", "private")
      .setHeader("Access-Control-Allow-Origin", origins.find((o) => o === req.header("Origin")) as any);

    next();
  });

  // export routes individually for cloud functions
  app.use(routerObj.router);
  exports[routerObj.name] = functions.region("europe-west1").https.onRequest(app);
});

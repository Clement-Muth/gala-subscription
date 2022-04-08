import { payment } from "./payment";
import { IRoutes } from "../../interfaces";
import { Router } from "express";

const router = Router();

router.use(payment);

export const stripe: IRoutes = { router, name: "stripe" };

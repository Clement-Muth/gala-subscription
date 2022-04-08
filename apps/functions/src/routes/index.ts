import { IRoutes } from "../interfaces";
import { stripe } from "./stripe";

const baseArray: IRoutes[] = [];

export const routes = baseArray.concat(stripe);

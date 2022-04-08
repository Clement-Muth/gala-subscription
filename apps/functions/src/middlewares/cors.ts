import * as Cors from "cors";
import { origins } from "../../utils/constants";

const options: Cors.CorsOptions = {
  methods: "GET,OPTIONS,POST,DELETE,HEAD,PATCH",
  preflightContinue: false,
  origin: origins
};

export const cors = Cors(options);

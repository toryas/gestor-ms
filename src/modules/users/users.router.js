import * as express from "express";
import { getLogger } from "../../core/util/logger.util";

import UsersController from "./controllers/users.controller"

const logger = getLogger("UsersRouter");

export default class UsersRouter {
  constructor() {
    logger.trace("Instanciando UsersRouter");
    this.route = express.Router();
    this.example(this.route);
    return this.route;
  }

  /**
   * example route method
   * @param {express.Router} route
   */
  example(route) {
      route.get("/example", (req, res) => {
        let controller = new UsersController();
        controller.getRoles().then(resp=>{
          res.status(200).send(resp);
        });
      });
  }



}

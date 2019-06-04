import { Sequelize } from "sequelize";

import * as CONFIG from '../../../config/general.config';
import { getLogger } from "../../../core/util/logger.util";
import RolesModel from '../models/roles.model';

const logger = getLogger("UsersController");

export default class UsersController{
    constructor(){
        logger.trace("Instanciando UsersController");
    }

    async getRoles(){
        let conection = new Sequelize(CONFIG.DATABASE.URL,{
            define:{
                timestamps: false
            }
        });
        let roles = RolesModel.init(conection);
        return await roles.findAll();
    }

}
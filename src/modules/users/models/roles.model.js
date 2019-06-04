import {Model, DataTypes} from 'sequelize';

export default class RolesModel extends Model{
    static init(sequelize){
        return super.init(
            {
                rol_id:{type:DataTypes.INTEGER,primaryKey:true},
                nombre:DataTypes.STRING,
                descripcion:DataTypes.STRING
            },
            {
                schema:"gestor",
                modelName:"roles",
                sequelize
            }
            
        )
    }
}
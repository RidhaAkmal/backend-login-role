import { Sequelize } from "sequelize";

const db = new Sequelize('role_db', 'root', '',{
    host:"localhost",
    dialect:"mysql"
});

export default db;
import { Sequelize } from 'sequelize-typescript';
import {
    User,
    Message,
    ChatRoom,
    UserToChatRoom
} from '../models/';

const db: any = {};
const sequelize = new Sequelize({
    host: process.env.HOST_PSQL,
    database: process.env.DBNAME_PSQL,
    dialect: 'postgres',
    username: process.env.USERNAME_PSQL,
    password: process.env.PASSWORD_PSQL,
    // dialectOptions: {
    //     ssl: true
    // },
    // define: {
    //     schema: 'morflo'
    // }
});

sequelize.addModels([
    User,
    Message,
    ChatRoom,
    UserToChatRoom
]);
db.sequelize = sequelize;
export default db;
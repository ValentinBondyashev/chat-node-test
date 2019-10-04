import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey } from 'sequelize-typescript';
import { ChatRoom, User } from './';

@Table({
    modelName: 'user_to_chat_room',
})

export class UserToChatRoom extends Model<UserToChatRoom> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    user_id!: number;

    @ForeignKey(() => ChatRoom)
    @Column(DataType.INTEGER)
    chat_room_id!: number;
}
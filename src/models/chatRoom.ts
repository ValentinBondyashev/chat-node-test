import { Table, Column, Model, PrimaryKey, HasMany, AutoIncrement } from 'sequelize-typescript';
import { Message, User } from './';

@Table({
    modelName: 'chat_room',
})

export class ChatRoom extends Model<ChatRoom> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @Column last_name!: string;

    @Column first_name!: string;

    @Column status!: string;

    @HasMany(() => Message)
    message!: Message[];

    @HasMany(() => User)
    users!: User[];
}
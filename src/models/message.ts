import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    DataType,
    BelongsTo
} from 'sequelize-typescript';
import { User } from './';

@Table({
    modelName: 'message',
})

export class Message extends Model<Message> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @Column
    text!: string;

    @Column first_name!: string;

    @Column status!: string;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    user_id!: number;

    @BelongsTo(() => User)
    user!: User;

}
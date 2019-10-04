import { Table, Column, Model, PrimaryKey, HasMany, AutoIncrement } from 'sequelize-typescript';
import { Message } from './';

@Table({
    modelName: 'user',
})

export class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @Column last_name!: string;

    @Column first_name!: string;

    @Column status!: string;

    @HasMany(() => Message)
    messages!: Message[];
}
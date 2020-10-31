import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Posts extends Model<Posts> {
  @Column
  title: string;

  @Column
  body: string;

  @Column
  primary_image: string;
}

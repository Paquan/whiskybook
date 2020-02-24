import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Whisky {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  brand: string;

  @Column()
  age: number;

}

import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ApiAppMardom } from "./ApiMardom";

@Entity({ name: "System" })
export class System {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 100,
  })
  name: string;
  @ManyToMany(() => ApiAppMardom)
  @JoinTable()
  apisAppMardom: ApiAppMardom[];
}

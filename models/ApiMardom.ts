import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "ApiAppMardom" })
export class ApiAppMardom {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 100,
  })
  name: string;
  @Column({
    length: 500,
  })
  description: string;
  @Column({
    length: 150,
  })
  repoUrl: string;
  @Column({
    length: 20,
  })
  type: string;
  @Column({
    length: 20,
  })
  devDatabaseServer: string;
  @Column({
    length: 20,
  })
  qaDatabaseServer: string;
  @Column({
    length: 20,
  })
  uatDatabaseServer: string;
  @Column({
    length: 20,
  })
  prodDatabaseServer: string;
  @Column({
    length: 100,
  })
  devUrl: string;
  @Column({
    length: 100,
  })
  qaUrl: string;
  @Column({
    length: 100,
  })
  uatUrl: string;
  @Column({
    length: 100,
  })
  prodUrl: string;
  @Column()
  isMadeWithBoilerplate: boolean;
  @Column({
    length: 100,
  })
  framework: string;
  @Column({
    length: 50,
  })
  frameworkVersion: string;
  @Column()
  isInProduction: boolean;
  @Column({
    length: 100,
  })
  mainDesingPattern: string;
}

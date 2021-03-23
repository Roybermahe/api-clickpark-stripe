import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Vehiculos } from "./vehiculos.entity";
import { isEntity } from "../base/entity.class";

@Entity()
export class Usuario extends isEntity {

  @Column({ unique: true , nullable: true})
  dni?: string;

  @Column({ nullable: true})
  nombre?: string;

  @Column({ unique: true })
  email?: string;

  @Column({ nullable: true})
  telefono?: string;

  @Column({ nullable: false, default: "disable" })
  userState: string;

  @OneToMany(type => Vehiculos, Vehiculos => Vehiculos.usuario)
  vehiculos?: Vehiculos[];

}

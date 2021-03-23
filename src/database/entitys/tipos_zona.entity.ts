import { isEntity } from "../base/entity.class";
import { Column, Entity, OneToMany } from "typeorm";
import { Zonas } from "./zonas_plazas.entity";

@Entity()
export class TiposZona extends isEntity {
  @Column()
  nombre: string;

  @OneToMany(type => Zonas, Zonas => Zonas.tipo)
  zonas?: Zonas[];

}

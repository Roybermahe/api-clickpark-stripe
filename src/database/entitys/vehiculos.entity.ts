import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from './usuarios.entity';
import { isEntity } from '../base/entity.class';
import { TiposVehiculos } from './tipos-vehiculos.entity';
import { Sanziones } from './sanziones.entity';
import { Parking } from './parking.entity';

@Entity()
export class Vehiculos extends isEntity {
  @Column({ unique: true, nullable: false })
  matricula: string;

  @Column()
  marca: string;

  @Column()
  etiqueta?: string;

  @ManyToOne((type) => Usuario, (Usuario) => Usuario.vehiculos)
  usuario?: Usuario;

  @ManyToOne(
    (type) => TiposVehiculos,
    (TiposVehiculos) => TiposVehiculos.vehiculos,
  )
  tipo?: TiposVehiculos;

  @OneToMany((type) => Sanziones, (Sanziones) => Sanziones.vehiculo)
  sanziones?: Sanziones[];

  @OneToMany((type) => Parking, (parking) => parking.vehiculo)
  parkings?: Parking[];
}

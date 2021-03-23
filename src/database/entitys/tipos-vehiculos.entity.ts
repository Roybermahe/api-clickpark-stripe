import { Column, Entity, OneToMany } from 'typeorm';
import { isEntity } from '../base/entity.class';
import { Vehiculos } from './vehiculos.entity';

@Entity()
export class TiposVehiculos extends isEntity {
  @Column()
  tipo: string;

  @OneToMany((type) => Vehiculos, (Vehiculos) => Vehiculos.tipo)
  vehiculos?: Vehiculos[];
}

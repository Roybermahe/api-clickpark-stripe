import { Column, Entity, ManyToOne } from 'typeorm';
import { isEntity } from '../base/entity.class';
import { Zonas } from './zonas_plazas.entity';
import { Vehiculos } from './vehiculos.entity';

@Entity()
export class Parking extends isEntity {
  @Column()
  horaInicio: string;

  @Column()
  tiempo: number;

  @Column()
  horaFinalizacion: string;

  @Column({ default: "PayOut"})
  estado?: string;

  @Column()
  lat: string;

  @Column()
  long: string;

  @ManyToOne((type) => Zonas, (zona) => zona.parkings)
  zona?: Zonas;

  @ManyToOne((type) => Vehiculos, (vehiculo) => vehiculo)
  vehiculo?: Vehiculos;
}

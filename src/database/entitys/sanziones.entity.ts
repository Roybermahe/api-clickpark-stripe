import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { isEntity } from '../base/entity.class';
import { Vehiculos } from './vehiculos.entity';
import { Titulares } from './titulares.entity';
import { personaConductora } from './persona-conductora.entity';

@Entity()
export class Sanziones extends isEntity {
  @Column()
  hecho: string;

  @Column()
  observaciones: string;

  @Column()
  via: string;

  @Column()
  lugar: string;

  @ManyToOne((type) => Vehiculos, (Vehiculos) => Vehiculos.sanziones)
  vehiculo?: Vehiculos;

  @ManyToOne((type) => Titulares, (titular) => titular.sanziones, {
    cascade: true,
  })
  titular?: Titulares;

  @ManyToOne((type) => personaConductora, (persona) => persona.sanziones, {
    cascade: true,
  })
  conductor?: personaConductora;
}

import { Column, Entity, OneToMany } from 'typeorm';
import { isEntity } from '../base/entity.class';
import { Sanziones } from './sanziones.entity';

@Entity()
export class personaConductora extends isEntity {
  @Column()
  numero: string;

  @Column()
  tipo: string;

  @Column()
  fechaNacimiento: string;

  @Column()
  clase: string;

  @Column()
  nombre: string;

  @Column()
  domicilio: string;

  @Column()
  localidad: string;

  @OneToMany((type) => Sanziones, (sanziones) => sanziones.conductor, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  sanziones?: Sanziones;
}

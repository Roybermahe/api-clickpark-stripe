import { Column, Entity, OneToMany } from 'typeorm';
import { isEntity } from '../base/entity.class';
import { Sanziones } from './sanziones.entity';

@Entity()
export class Titulares extends isEntity {
  @Column()
  nombre: string;

  @Column()
  domicilio: string;

  @Column()
  localidad: string;

  @OneToMany((type) => Sanziones, (sanzion) => sanzion.titular, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  sanziones?: Sanziones[];
}

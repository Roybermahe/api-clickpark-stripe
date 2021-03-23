import { isEntity } from '../base/entity.class';
import { Column, Entity } from 'typeorm';

@Entity()
export class Vigilantes extends isEntity {
  @Column({ nullable: false, unique: true })
  numeroplaca: string;

  @Column()
  correo: string;

  @Column()
  nombre: string;
}

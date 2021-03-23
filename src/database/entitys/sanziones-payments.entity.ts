import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { isEntity } from '../base/entity.class';
import { Sanziones } from './sanziones.entity';

@Entity()
export class SanzionesPayments extends isEntity {
  @Column()
  correo: string;

  @Column()
  price: string;

  @OneToOne(() => Sanziones)
  @JoinColumn()
  parking?: Sanziones;
}

import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { isEntity } from '../base/entity.class';
import { Parking } from './parking.entity';

@Entity()
export class ParkingPayments extends isEntity {
  @Column()
  correo: string;

  @Column()
  price: string;

  @Column()
  token?: string;

  @OneToOne(() => Parking)
  @JoinColumn()
  parking?: Parking;
}

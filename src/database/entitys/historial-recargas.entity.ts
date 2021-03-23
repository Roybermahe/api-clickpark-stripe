import { Column, Entity, ManyToOne } from 'typeorm';
import { isEntity } from '../base/entity.class';
import { Recargas } from './recargas.entity';

@Entity()
export class HistorialRecargas extends isEntity {
  @Column()
  valor: number;

  @ManyToOne(() => Recargas, (r) => r.historial)
  recarga?: Recargas;
}

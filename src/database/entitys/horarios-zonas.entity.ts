import { Column, Entity, ManyToOne } from 'typeorm';
import { isEntity } from '../base/entity.class';
import { Zonas } from './zonas_plazas.entity';

@Entity()
export class HorariosZonas extends isEntity {
  @Column()
  tiempo: number;

  @Column()
  formatoTiempo: formato;

  @Column('decimal', { scale: 2, precision: 5 })
  tarifa: number;

  @Column('decimal', { scale: 2, precision: 5, default: 0 })
  descuento?: number;

  @ManyToOne((type) => Zonas, (Zonas) => Zonas.horarios, {
    onDelete: 'CASCADE',
  })
  zona?: Zonas;
}

export type formato = 'min' | 'hrs' | 'dd';

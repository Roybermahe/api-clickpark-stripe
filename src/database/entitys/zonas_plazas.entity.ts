import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { isEntity } from '../base/entity.class';
import { TiposZona } from './tipos_zona.entity';
import { formato, HorariosZonas } from './horarios-zonas.entity';
import { HorarioFuncionamiento } from './horario-funcionamiento.entity';
import { Parking } from './parking.entity';

@Entity()
export class Zonas extends isEntity {
  @Column()
  nombreZona: string;

  @Column()
  tiempoLimite: number;

  @Column()
  formato: formato;

  @ManyToOne((type) => TiposZona, (TiposZona) => TiposZona.zonas)
  tipo: TiposZona;

  @OneToMany((type) => HorariosZonas, (HorariosZonas) => HorariosZonas.zona, {
    cascade: true,
  })
  horarios?: HorariosZonas[];

  @OneToMany((type) => HorarioFuncionamiento, (horario) => horario.zona, {
    cascade: true,
  })
  horariosFuncionamiento?: HorarioFuncionamiento[];

  @OneToMany((type) => Parking, (parking) => parking.zona)
  parkings: Parking[];
}

import { Column, Entity, ManyToOne } from 'typeorm';
import { isEntity } from '../base/entity.class';
import { Zonas } from './zonas_plazas.entity';

@Entity()
export class HorarioFuncionamiento extends isEntity {
  @Column()
  diasSemana: string;

  @Column()
  HorariosJornada: string;

  @ManyToOne((type) => Zonas, (item) => item.horariosFuncionamiento, {
    onDelete: 'CASCADE',
  })
  zona?: Zonas;
}

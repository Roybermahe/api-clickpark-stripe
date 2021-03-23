import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { isEntity } from '../base/entity.class';
import { UserAccounts } from './user-accounts.entity';
import { HistorialRecargas } from './historial-recargas.entity';

@Entity()
export class Recargas extends isEntity {
  @Column()
  valor: number;

  @OneToOne(() => UserAccounts)
  @JoinColumn()
  usuario: UserAccounts;

  @OneToMany(() => HistorialRecargas, (h) => h.recarga)
  historial?: HistorialRecargas[];
}

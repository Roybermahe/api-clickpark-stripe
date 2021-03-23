import { Column, PrimaryGeneratedColumn } from "typeorm";

export class isEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ precision: 3, default: () => 'CURRENT_TIMESTAMP(3)' })
  fechaRegistro?: Date;

  @Column({
    precision: 3,
    default: () => 'CURRENT_TIMESTAMP(3)',
    onUpdate: 'CURRENT_TIMESTAMP(3)',
  })
  fechaActualizacion?: Date;
}

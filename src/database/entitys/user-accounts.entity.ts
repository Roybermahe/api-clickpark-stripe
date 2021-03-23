import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { isEntity } from "../base/entity.class";
import { Usuario } from "./usuarios.entity";

@Entity()
export class UserAccounts extends isEntity {
  @Column({ nullable: false, unique: false})
  username: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false})
  password: string;

  @OneToOne(() => Usuario)
  @JoinColumn()
  usuario: Usuario;
}

import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";
import { User } from "./User.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ length: 30 })
  phone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @ManyToOne(() => User, (u) => u.contacts)
  user: User;
}

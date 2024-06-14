import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Register {
  @PrimaryGeneratedColumn({ unsigned: true })
  id?: number;

  @Column({ unsigned: true })
  userId?: number;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  date?: string;

  @Column({ type: 'time', default: () => 'CURRENT_TIME' })
  timeEntry?: string;

  @Column({ type: 'time', nullable: true })
  timeExit?: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: string;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt?: string;

  @Column({
    type: 'boolean',
    default: () => false,
  })
  isAdminEdited?: boolean;

  @Column({
    type: 'float',
    nullable: true,
  })
    latitude?: number;

  @Column({
    type: 'float',
    nullable: true,
  })
    longitude?: number;

}

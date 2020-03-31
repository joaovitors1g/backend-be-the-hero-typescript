import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import Ong from './Ong';

@Entity({
  name: 'incidents'
})
export class Incident {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  value!: number;

  @Column({ select: false })
  ong_id!: string;

  @ManyToOne(type => Ong)
  @JoinColumn({ name: 'ong_id' })
  ong!: Ong;
}

export default Incident;

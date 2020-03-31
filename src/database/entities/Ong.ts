import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import Incident from './Incident';

@Entity({
  name: 'ongs'
})
export class Ong {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  whatsapp!: string;

  @Column()
  city!: string;

  @Column({ length: 2 })
  uf!: string;

  @OneToMany(
    type => Incident,
    incident => incident.ong
  )
  incidents!: Incident[];
}

export default Ong;

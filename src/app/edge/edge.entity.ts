import { IEdge } from 'src/interfaces/edge.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { assign, pick } from 'lodash';

@Entity()
export class Edge implements IEdge {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  source_id: string;

  @Column()
  source_output: string;

  @Column()
  target_id: string;

  @Column()
  target_input: string;

  constructor(edge?: IEdge) {
    assign(
      this,
      pick(edge, [
        'id',
        'source_id',
        'source_output',
        'target_id',
        'target_input',
      ]),
    );
  }
}

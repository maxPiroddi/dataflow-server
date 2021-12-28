import { IWorkspace } from 'src/interfaces/workspace.interface';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { assign, pick } from 'lodash';

@Entity()
export class Workspace implements IWorkspace {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nodes: string;

  @Column()
  edges: string;

  @Column()
  focus: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;

  constructor(workspace?: IWorkspace) {
    assign(this, pick(workspace, ['id', 'nodes', 'edges', 'focus']));
  }
}

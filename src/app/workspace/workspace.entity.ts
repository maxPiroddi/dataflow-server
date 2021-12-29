import { IWorkspace } from 'src/interfaces/workspace.interface';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { assign, pick } from 'lodash';
import { Node } from 'src/interfaces/node.interface';

@Entity()
export class Workspace implements IWorkspace {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToMany(() => Node, (node) => node.workspace)
  nodes: Node[];

  @Column()
  edges: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;

  constructor(workspace?: IWorkspace) {
    assign(this, pick(workspace, ['id', 'nodes', 'edges']));
  }
}

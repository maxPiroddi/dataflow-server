import { INode, NodeKind } from 'src/interfaces/node.interface';
import { assign, pick } from 'lodash';

import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Workspace } from '../workspace/workspace.entity';

@Entity()
export class Node implements INode {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Workspace, (workspace) => workspace.nodes)
  workspace: Workspace;

  @Column()
  kind: NodeKind;

  @Column()
  position_x: string;

  @Column()
  position_y: string;

  @Column()
  inputs: string[][];

  @Column()
  outputs: string[][];

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;

  constructor(node?: INode) {
    assign(
      this,
      pick(node, [
        'id',
        'kind',
        'position_x',
        'position_y',
        'inputs',
        'outputs',
      ]),
    );
  }
}

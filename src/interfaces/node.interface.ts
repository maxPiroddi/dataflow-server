import { ApiProperty } from '@nestjs/swagger';

import { assign, pick } from 'lodash';
import { Workspace } from 'src/app/workspace/workspace.entity';

export type NodeKind = 'add' | 'sub' | 'div' | 'mult';

export interface INode {
  workspace: Workspace;
  kind: NodeKind;
  position_x: string;
  position_y: string;
  inputs: string[][];
  outputs: string[][];
}

export class Node implements INode {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  workspace: Workspace;

  @ApiProperty()
  kind: NodeKind;

  @ApiProperty()
  position_x: string;

  @ApiProperty()
  position_y: string;

  @ApiProperty()
  inputs: string[][];

  @ApiProperty()
  outputs: string[][];

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

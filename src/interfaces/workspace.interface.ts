import { ApiProperty } from '@nestjs/swagger';
import { Node } from 'src/interfaces/node.interface';
import { assign, pick } from 'lodash';

export interface IWorkspace {
  nodes: Node[];
  edges: string;
}

export class Workspace implements IWorkspace {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  nodes: Node[];

  @ApiProperty()
  edges: string;

  constructor(workspace?: IWorkspace) {
    assign(this, pick(workspace, ['id', 'nodes', 'edges']));
  }
}

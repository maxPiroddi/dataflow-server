import { ApiProperty } from '@nestjs/swagger';

import { assign, pick } from 'lodash';

export interface IWorkspace {
  nodes: string;
  edges: string;
  focus: string;
}

export class Workspace implements IWorkspace {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  nodes: string;

  @ApiProperty()
  edges: string;

  @ApiProperty()
  focus: string;

  constructor(workspace?: IWorkspace) {
    assign(this, pick(workspace, ['id', 'nodes', 'edges', 'focus']));
  }
}

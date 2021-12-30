import { ApiProperty } from '@nestjs/swagger';
import { Node } from './node.interface';
import { assign, pick } from 'lodash';

export interface IEdge {
  source_id: Node['id'];
  source_output: string;
  target_id: Node['id'];
  target_input: string;
}

export class Edge implements IEdge {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  source_id: string;

  @ApiProperty()
  source_output: string;

  @ApiProperty()
  target_id: string;

  @ApiProperty()
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

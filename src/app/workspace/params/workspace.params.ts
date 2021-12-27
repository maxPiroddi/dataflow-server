import { ApiProperty } from '@nestjs/swagger';

class WorkspaceParams {
  @ApiProperty()
  userId: string;
}

export default WorkspaceParams;

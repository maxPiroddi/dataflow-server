import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { IWorkspace } from 'src/interfaces/workspace.interface';
import WorkspaceParams from './params/workspace.params';
import { WorkspaceService } from './workspace.service';

@Controller()
export class WorkspaceController {
  constructor(private readonly workspacesService: WorkspaceService) {}

  @Get('workspace')
  // Implement swagger:
  // @ApiOkResponse({
  //     type: Workspace
  //     description: 'Workspace retrieved'
  // })
  // @ApiBadRequestResponse({ description: 'Failed to retrieve workspace'})
  async getWorkspace(
    @Query() queryParams: WorkspaceParams,
  ): Promise<IWorkspace> {
    try {
      const { userId } = queryParams;

      return await this.workspacesService.getWorkspace(userId);
    } catch (err) {
      throw new HttpException(err.toString(), HttpStatus.BAD_REQUEST);
    }
  }
}

import { Injectable } from '@nestjs/common';
import { IWorkspace } from 'src/interfaces/workspace.interface';

@Injectable()
export class WorkspaceService {
  getWorkspace(userId: string): IWorkspace {
    console.log(`User ID is ${userId}`);

    return {
      nodes: {},
      edges: {},
      focus: null,
    };
  }
}

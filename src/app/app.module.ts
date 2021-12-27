import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { WorkspaceModule } from './workspace/workspace.module';

@Module({
  imports: [DbModule, WorkspaceModule],
})
export class AppModule {}

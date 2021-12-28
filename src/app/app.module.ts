import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkspaceModule } from './workspace/workspace.module';
import connectionOptions from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(connectionOptions), WorkspaceModule],
})
export class AppModule {}

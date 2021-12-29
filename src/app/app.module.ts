import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkspaceModule } from './workspace/workspace.module';
import connectionOptions from './ormconfig';
import { NodeModule } from './node/node.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(connectionOptions),
    NodeModule,
    WorkspaceModule,
  ],
})
export class AppModule {}

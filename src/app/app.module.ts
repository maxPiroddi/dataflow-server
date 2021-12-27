import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { WorkspaceModule } from './workspace/workspace.module';

@Module({
  imports: [TypeOrmModule.forRoot(), WorkspaceModule],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

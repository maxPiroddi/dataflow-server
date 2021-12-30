import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EdgeController } from './edge.controller';
import { Edge } from './edge.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Edge])],
  controllers: [EdgeController],
})
export class EdgeModule {}

import { IWorkspace } from 'src/interfaces/workspace.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Workspace implements IWorkspace {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nodes: Record<string, unknown>;

  @Column()
  edges: Record<string, unknown>;

  @Column()
  focus: Record<string, unknown>;
}

import { join } from 'path';
import { Workspace } from 'src/app/workspace/workspace.entity';
import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'db',
  entities: [Workspace],
  synchronize: false,
  dropSchema: false,
  migrationsRun: true,
  logging: ['warn', 'error'],
  logger: 'debug',
  migrations: [join(__dirname, 'migrations/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default connectionOptions;

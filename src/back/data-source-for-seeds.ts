import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

export const DataSourceSeeds = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  migrations: ['db/seeds/*{.ts,.js}'],
  database: process.env.DATABASE_NAME,
  entities: ['src/**/*.entity{.ts,.js}'],
  password: process.env.DATABASE_PASSWORD,
  username: process.env.DATABASE_USERNAME,
  port: Number(process.env.DATABASE_PORT),
  ssl: process.env.NODE_ENV === 'production'
});

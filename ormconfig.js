module.exports = {
  type: 'sqlite',
  migrations: ['./dist/database/migrations/*.js'],
  database: './src/database/db.sqlite',
  entities: ['./dist/database/entities/*.js'],
  cli: {
    migrationsDir: './src/database/migrations',
    entitiesDir: './src/database/entities'
  }
};

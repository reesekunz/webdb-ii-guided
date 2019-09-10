// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      // the import here is from the root folder, not a path from where you are
      filename: "./data/produce.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};

// to create a migration => knex migrate:make <name>
// to run all migrations => knex migrate:latest

// to undo migrations => knex migrate:rollback

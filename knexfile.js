// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      // the import here is from the root folder, not a path from where you are
      filename: "./data/produce.db3"
    },
    useNullAsDefault: true
  }
};

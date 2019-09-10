exports.up = function(knex) {
  // up is the changes we want to make
  // CREATING A TABLE CALLED FRUITS
  // id = primary key, autoincrement, integer
  // name: string, up to 128 characters, unique, required (not null)
  // avgWeightOz: decimals
  // delicious: boolean (T/F)

  // all these methods are being called with schema (knex schema builder)

  // Fruits is the name of table being created
  return knex.schema.createTable("fruits", column => {
    // id = primary key, autoincrement, integer
    column.increments(); // defaults to id
    // name: string, up to 128 characters, unique, required (not null)
    column
      .text("name", 128)
      .unique()
      .notNullable();
    // avgWeightOz: decimals
    column.decimal("avgWeightOz");
    // delicious: boolean (T/F)
    column.boolean("delicious");
  });
};

exports.down = function(knex) {
  // revert the changes from up function
  return knex.schema.dropTableIfExists("fruits");
};

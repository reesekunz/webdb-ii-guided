exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("fruits")
    .truncate() // truncate resets the id primary key
    .then(function() {
      // Inserts seed entries
      return knex("fruits").insert([
        { name: "mango", delicious: true, avgWeightOz: 8.5 },
        { name: "banana", delicious: true, avgWeightOz: 5.6 },
        { name: "pineapple", delicious: false, avgWeightOz: 15.0 }
      ]);
    });
};

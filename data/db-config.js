const knex = require("knex");

const knexFile = require("../knexfile");

// grab the development key from knex file
const knexConfig = knexFile.development;

module.exports = knex(knexConfig);

// import into fruits-router and veg-router

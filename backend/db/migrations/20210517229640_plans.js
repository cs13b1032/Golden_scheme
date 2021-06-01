const { onUpdateTrigger } = require("../utils/updateTrigger");

exports.up = async (knex) => {
  console.log("[Schema : golden_harvest]  Creating table : plans");
  await knex.schema
    .withSchema("golden_harvest")
    .createTable("plans", (table) => {
      table.increments("id").primary();
      table.integer("number_of_months").notNullable().unique();
      table.timestamps(true, true);
    });

  await knex.raw(
    "ALTER SEQUENCE golden_harvest.plans_id_seq RESTART WITH 1000000"
  );

  await knex.raw(onUpdateTrigger(`golden_harvest.plans`));
};
exports.down = async (knex) => {
  console.log("[Schema : golden_harvest]  Dropping Table : plans");
  await knex.raw("DROP TABLE IF EXISTS golden_harvest.plans;");
};

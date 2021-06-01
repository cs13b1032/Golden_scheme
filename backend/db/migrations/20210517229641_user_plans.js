const { onUpdateTrigger } = require("../utils/updateTrigger");

exports.up = async (knex) => {
  console.log("[Schema : golden_harvest]  Creating table : user_plans");
  await knex.schema
    .withSchema("golden_harvest")
    .createTable("user_plans", (table) => {
      table.increments("id").primary();
      table
        .integer("user_id")
        .notNullable()
        .references("id")
        .inTable("user_management.users")
        .onDelete("CASCADE");
      table
        .integer("plan_id")
        .notNullable()
        .references("id")
        .inTable("golden_harvest.plans")
        .onDelete("CASCADE");
      table.float("plan_price").notNullable();
      table.timestamp("start_time").notNullable();
      table.timestamp("end_time").notNullable();
      table.timestamps(true, true);
    });

  await knex.raw(
    "ALTER SEQUENCE golden_harvest.user_plans_id_seq RESTART WITH 1000000"
  );

  await knex.raw(onUpdateTrigger(`golden_harvest.user_plans`));
};
exports.down = async (knex) => {
  console.log("[Schema : golden_harvest]  Dropping Table : user_plans");
  await knex.raw("DROP TABLE IF EXISTS golden_harvest.user_plans;");
};

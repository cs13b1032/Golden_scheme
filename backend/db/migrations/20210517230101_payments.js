const { onUpdateTrigger } = require("../utils/updateTrigger");

exports.up = async function (knex) {
  console.log("[Schema : golden_harvest]  Creating table : payments");
  await knex.schema
    .withSchema("golden_harvest")
    .createTable("payments", (table) => {
      table.increments("id").primary();
      table.text("payment_reference_code").notNullable();
      table
        .integer("user_plan_id")
        .notNullable()
        .references("id")
        .inTable("golden_harvest.user_plans")
        .onDelete("CASCADE");
      table.float("paid_amount").defaultTo(0.0);
      table.text("currency_type").defaultTo("INR");
      table.timestamps(true, true);
    });

  await knex.raw(onUpdateTrigger("golden_harvest.payments"));
  await knex.raw(
    "ALTER SEQUENCE golden_harvest.payments_id_seq RESTART WITH 1000000"
  );
};

exports.down = async function (knex) {
  console.log(
    "[Schema : golden_harvest]  Dropping Table dependency for : payments"
  );
  await knex.schema.withSchema("golden_harvest").dropTableIfExists("payments");
};

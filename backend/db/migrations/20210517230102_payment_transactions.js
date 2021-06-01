const { onUpdateTrigger } = require('../utils/updateTrigger');

exports.up = async function (knex) {
    console.log('[Schema : golden_harvest]  Creating table : payment_transactions');
    await knex.schema.withSchema('golden_harvest').createTable('payment_transactions', table => {
        table.increments('id').primary();
        table.text('payment_transaction_reference_code').notNullable();
        table.integer('payment_id').notNullable().references('id').inTable('golden_harvest.payments').onDelete('CASCADE');
        table.text('payment_mode');
        table.float('amount');
        table.float('currency_type');
        table.text('transaction_status').notNullable();
        table.text('external_transaction_reference_id');
        table.timestamps(true,true)
    });

    await knex.raw(onUpdateTrigger('golden_harvest.payment_transactions'));
    await knex.raw('ALTER SEQUENCE golden_harvest.payment_transactions_id_seq RESTART WITH 1000000');
};

exports.down = async function (knex) {
    console.log('[Schema : golden_harvest]  Dropping Table dependency for : payment_transactions');
    await knex.schema.withSchema('golden_harvest').dropTableIfExists('payment_transactions');
};

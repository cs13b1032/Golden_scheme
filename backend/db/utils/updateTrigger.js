'use strict';

module.exports = {
  onUpdateTrigger: table => `
      CREATE TRIGGER ${table.split('.').join('_')}_updated_at_timestamp
      BEFORE UPDATE ON ${table}
      FOR EACH ROW
      EXECUTE PROCEDURE golden_harvest.set_updated_at_timestamp();
    `
};

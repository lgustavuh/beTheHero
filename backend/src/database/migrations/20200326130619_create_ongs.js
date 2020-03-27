
/**
 * Método up é responsável por criar as tabelas
 */
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable();

  });
};

/**
 * Método down é usado pra quando der algum problema nas tabelas,
 * normalmente para deletar a tabela.
 */
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};

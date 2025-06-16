import { sequelize, Sequelize } from "./db.js";

// Fazendo a tabela de produtos
const Produto = sequelize.define("produtos", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

// vai força o sql para não fazer outra tabela ser existir
Produto.sync({ force: false });

export { Produto };

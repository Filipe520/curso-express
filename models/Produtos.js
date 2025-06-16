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

// Agora vamos criar algum dado para a tabela
Produto.create({
  nome: "RTX 4070",
  preco: "3200.99",
  descricao: "Placa de Vídeo da marca Nvidia",
});

// vai força o sql para não fazer outra tabela ser existir
Produto.sync({ force: false });

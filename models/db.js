// Importando a Lib
import { Sequelize } from "sequelize";

// Conectando ao Banco de dados
const sequelize = new Sequelize("cadastro", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

// Fazendo verificação do sequelize
sequelize
  .authenticate()
  .then((res) => console.log("Banco de dados conectado com sucesso 🚀 ", res))
  .catch((err) =>
    console.log("Erro ao se conectar com o Banco de Dados, 😢 ", err)
  );

// Exportadando esse documento para acessar em outras áreas do projeto
export { Sequelize, sequelize };

import express from "express";
import { Produto } from "./models/Produtos.js";
import bodyParser from "body-parser";

const app = express();

// Configurar BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Enviando dados para o Banco de Dados
app.post("/cadastro", (req, res) => {
  Produto.create({
    nome: req.body.nome,
    preco: req.body.preco,
    descricao: req.body.descricao,
  })
    .then((data) => res.send("Produto cadastrado com sucesso! ✅, ", data))
    .catch((err) => err.send("Erro ao cadastrar o produto ❌, ", err));
});

// Pegando os dados do Banco de Dados
app.get("/", (req, res) => {
  // o findAll é a mesma coisa do select from produtos do SQL
  Produto.findAll()
    .then((produtos) => res.send({ produtos: produtos }))
    .catch((err) => res.send("Erro ao buscar os dados ❌", err));
});

app.listen(3000, console.log("Servidor está rodando 🚀"));

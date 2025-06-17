// importação
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

// Pesquisar algo no banco
app.get("/:nome", (req, res) => {
  Produto.findAll({ where: { nome: req.params.nome } })
    .then((produto) => {
      res.send(produto);
    })
    .catch((err) => res.send("Produto não existe na base de dados", err));
});

// Atualizando o Banco de Dados
app.patch("/atualizar/:id", (req, res) => {
  Produto.update(
    {
      nome: req.body.nome,
      preco: req.body.preco,
      descricao: req.body.descricao,
    },
    // só vai atualizar ser id for realmente igual
    { where: { id: req.params.id } }
  )
    .then((data) =>
      res.send("Sucesso ao atualizar os dados do Produto ✅", data)
    )
    .catch((err) => res.send("Erro ao atualizar os dados do produto ❌", err));
});

// Métado DELETE
app.delete("/deletar/:id", (req, res) => {
  Produto.destroy({ where: { id: req.params.id } })
    .then((data) => res.send("Produto DELETADO com sucesso!", data))
    .catch((err) => res.send("Erro ao DELETAR o produto ❌", err));
});

app.listen(3000, console.log("Servidor está rodando 🚀"));

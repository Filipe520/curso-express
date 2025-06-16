import express from "express";
import { Produto } from "./models/Produtos.js";
import bodyParser from "body-parser";

const app = express();

// Configurar BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/cadastro", (req, res) => {
  Produto.create({
    nome: req.body.nome,
    preco: req.body.preco,
    descricao: req.body.descricao,
  })
    .then((data) => res.send("Produto cadastrado com sucesso! ✅, ", data))
    .catch((err) => err.send("Erro ao cadastrar o produto ❌, ", err));
});

app.listen(3000, console.log("Servidor está rodando 🚀"));

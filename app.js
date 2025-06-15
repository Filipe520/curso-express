import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Seja Bem-Vindo ao nosso site! TESTANDO O Nodemon");
});

app.get("/artigos/:id/:data", (req, res) => {
  if (req.params.id == "1" && req.params.data == "18-04-2025") {
    res.send("1 - Como Criar aplicativo Android");
  } else if (req.params.id == "2") {
    res.send("2 - Como usar o Node.js \n 3 - Como usar o Express");
  } else {
    res.send("Nenhum artigo foi encontrado!");
  }
});

app.get("/contato", (req, res) => {
  res.send("Deixe a sua mensagem");
});

app.listen(3000, console.log("Servidor está rodando 🚀"));

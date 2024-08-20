import express from "express";
import exphbs from "express-handlebars";
import path from 'path';

const app = express();

// Configuração do Handlebars
const handlebars = exphbs.create({
    partialsDir: ["views/partials"]  // Diretório dos partials
});

app.engine('handlebars', handlebars.engine);
app.set("view engine", "handlebars");

// Definindo o diretório de visualizações (views)
app.set('views', path.resolve('views'));

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.use(express.static("public"));
app.use(express.static("node_modules"));

// Primeira rota
app.get('/', function (req, res) {
    res.send('Hello World');
});

// Segunda rota
app.get('/html', function (req, res) {
    res.render('index'); // Renderiza o arquivo index.hbs
});

app.listen(3000, () => {
    console.log("rodando na porta https://localhost:3000");
});
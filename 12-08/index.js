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

// carregando noticias do JSON
const noticias = JSON.parse(fs.readFileSync(paht.join(__dirname, 'noticias.json'),'utf8')).noticias;

// Definindo o diretório de visualizações (views)
app.set('views', path.resolve('views'));

app.use(
    express.urlencoded({
        extended: true
    })
);

// Rota de notícia
app.get('/noticia/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const noticia = noticias.find(n => n.id === id);

    if (noticia) {
        res.render('noticia', noticia);
    } else {
        res.status(404).send('Notícia não encontrada');
    }
});

app.use(express.json());

app.use(express.static("public"));
app.use(express.static("node_modules"));

// rota
app.get('/', function (req, res) {
    res.render('index', { noticias }); // Renderiza o arquivo index.hbs
});

app.listen(3000, () => {
    console.log("rodando na porta https://localhost:3000");
});

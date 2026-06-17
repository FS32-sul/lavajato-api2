const express = require("express");
const cors = require("cors");

const carrosRoutes = require("./src/routes/carrosRoutes");
const servicosRoutes = require("./src/routes/servicosRoutes");
const funcionariosRoutes = require("./src/routes/funcionariosRoutes");
const ordensRoutes = require("./src/routes/ordensRoutes");
const ordensServicosRoutes = require("./src/routes/ordensServicosRoutes");

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//Rotas
app.get("/", (req, res) => {
    res.send("Boas vindas");
});

app.use("/carros", carrosRoutes);
app.use("/servicos", servicosRoutes);
app.use("/funcionarios", funcionariosRoutes);
app.use("/ordens", ordensRoutes);
app.use("/ordens-servicos", ordensServicosRoutes);


// Middleware para caso a rota não seja encontrada
app.use((req, res) => {
    res.status(404).send("Rota não encontrada!");
});

app.listen(8000, () => {
    console.log("Servidor on: http://localhost:8000");
});
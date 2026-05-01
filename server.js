require("dotenv").config();

const PORT = process.env.PORT || 3000;
const express = require("express");
const connectDB = require("./config/database");

const app = express();

connectDB();            // conectamos con mongo

app.use(express.json());

// rutas
app.use("/auth", require("./src/routes/authRoutes"));
app.use("/machines", require("./src/routes/machineRoutes"));

app.listen(PORT, () => {
  console.log((`Servidor corriendo en puerto ${PORT}`));
});
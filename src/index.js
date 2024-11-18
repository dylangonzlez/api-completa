import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import bodyParser from "body-parser";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import rolRoutes from "./routes/rolRoutes.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conectado a MONGOBD Atlas (WEB)");
  })
  .catch((error) => {
    console.log(`Ocurrio el siguiente error al conectarse == ${error.message}`);
  });


// swagger
import swaggerUi from'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api-rol-usuario documentación con Swagger",
      version: "1.0.0",
      
    },
  },
  servers: [
    {
      url: "http://localhost:5000",
    },
  ],
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
}

const app = express();

app.use(express.json());

// Middleware para manejar datos URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/src/routes", usuarioRoutes);
app.use("/src/routes", rolRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerSpec)));  

// Inicia la conexión a la base de datos y el servidor

app.get('/', (req, res) => {
  res.send('Rol-usuario')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`el servidor se inicia en el puerto ${PORT}`);
});

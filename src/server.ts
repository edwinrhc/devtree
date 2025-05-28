import  express from 'express' // ESM EcmasSCRIPT MODULE
import 'dotenv/config'
import router from "./router";
import {connectDB} from "./config/db";


const app = express();

connectDB();


// Leer datos de formulario
app.use(express.json())

app.use('/',router);


export default  app;

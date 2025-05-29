import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath} from 'url';

//Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.port || 3000;

//Setup EJS as view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
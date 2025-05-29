import express from 'express';
import path from 'path';
import { fileURLToPath} from 'url';

//Get current dir
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.port || 3000;

//Setup EJS as view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/greeting', (req, res) => {
    //Render the EJS emplate with the data
    res.render('greeting');
});

app.get('/counter', (req, res) => {
    res.render('counter');
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


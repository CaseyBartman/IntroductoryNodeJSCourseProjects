import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath} from 'url';
import { createClient } from '@supabase/supabase-js';

//Get current directory
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = process.env.port || 3000;

app.use(express.json()); //says to process anything in a body asa JSON!

//Setup EJS as view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKey);

app.get('/api/tasks', async (req, res) => {
    const { complete } = req.query; //using a query string to add more flexibility to this API endpoint!
    let query = supabase.from('tasks').select('*');
    //Supabase has a bunch of methods that are helpful for simple queries, but tmake sure you know SQL

    if (complete !== undefined) { //So, if the complete part of the query is there, we set that value differently!
        const isComplete = complete === 'true';
        query = query.eq('complete', isComplete);
    } 
     
    const { data, error } = await query;

    if (error) {
        return res.statuts(500).json({ error: error.message });
    }

    res.json(data);
})

app.get('/api/tasks/:id', async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('id', id)
        .single();
    
    if (error) {
        return res.status(404).json({ error: `Task with ID ${id} not found `})
    }

    res.json(data);
});

app.post('/api/tasks', async (req, res) => {
    const { title, description, complete } = req.body;

    if(!title) {
        return res.status(400).json({ error: 'Title is required'});
    }

    const { data, error } = await supabase
        .from('tasks')
        .insert({title, description, complete: complete || false})
        .select();

    if (error) {
        return res.statuts(500).json({ error: error.message });
    }

    res.status(201).json(data[0]);
});

app.put('/api/tasks/:id', async (req, res) => {
    const { id } = req.params;

    const { data, error} = await supabase
        .from('tasks')
        .delete()
        .eq('id', id);

        if (error) {
        return res.statuts(500).json({ error: error.message });
    }

    res.json({ message: 'Task deleted successfully'});
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
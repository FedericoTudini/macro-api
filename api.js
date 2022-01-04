const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const Client = require('./models/clientModel');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//DB Connection
mongoose.connect(
    "mongodb+srv://ftudini:asroma1927@cluster.so1wv.mongodb.net/macro?retryWrites=true&w=majority&ssl=true",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => console.log("[ Connected to Database ]")
)

//Listening
app.listen(process.env.PORT || 3001, () => {
    console.log("[ Server is ready and listening ]");
})

//POST (CREATE)
//GET (READ)
//PATCH (UPDATE)
//DELETE (DELETE)

//Routes
app.get('/', (req, res) => {
    res.send('We are on root!!');
})

app.post('/add-client', (req, res) => {
    const client = new Client({
        nomeCompleto: req.body.nomeCompleto,
        email: req.body.email,
        cell: req.body.cell,
    });
    console.log(client);


    client.save()
        .then((result) => {
            console.log("[ Nuovo cliente aggiunto al DB ]");
            res.send(client);
        })
        .catch(err => {
            console.log(err);
            res.json({message : err});
        });
        
});

app.get('/clients', async (req, res) => {
    try 
    {
        const clients = await Client.find();
        res.json(clients);
        console.log(clients);
    } 
    catch (err)
    {
        res.json({ message : err });
    }
});

//clients' names
app.get('/clients-names', async (req, res) => {
    try 
    {
        var temp = await Client.find();
        const clients = temp.map(client => ({
            nome: client.nomeCompleto
        }));
        res.json(clients);
    } 
    catch (err)
    {
        res.json({ message : err });
    }
});

//clients' filtered
app.get('/clients-filtered', async (req, res) => {
    try 
    {
        var temp = await Client.find();
        const clients = temp.map(client => ({
            nomeCompleto: client.nomeCompleto,
            cell: client.cell,
            email: client.email
        }));
        res.json(clients);
    } 
    catch (err)
    {
        res.json({ message : err });
    }
});

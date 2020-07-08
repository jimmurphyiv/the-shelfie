require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller');
const app = express();

const {SERVER_PORT, CONNECTION_STRING,} = process.env;

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
})

app.get('/api/inventory', controller.getInventory);
app.post('/api/inventory', controller.addProduct);
app.put('/api/inventory/:id', controller.updateProduct);
app.delete('/api/inventory/:id', controller.deleteProduct);

app.listen(SERVER_PORT, () => console.log('Server spinning on 4545'))
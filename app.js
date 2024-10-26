require ('dotenv').config();

const express = require('express');
const app = express();
const useRoutes = require('./routes/users');

app.use(express.json());
app.use('/api/usarios', useRoutes)



const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`Servidor rodando em ${PORT}`);
})
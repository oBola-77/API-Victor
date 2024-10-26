const pool = require('../config/database');

exports.create = async (req, res) => {
    const { name, document, email, birthday } = req.body;

    try {
        const result = await pool.query('INSERT INTO users (name, document, email, birthday) VALUES ($1, $2, $3, $4) RETURNING *', 
            [name, document, email, birthday]);
            res.status(201).json(result.rows(0));
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Fodeu tudo, tenta de novo'});
    }
}

exports.getAll = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users')
            res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Fodeu tudo, tenta de novo'});
    }
}

exports.getOne = async (req, res) => {
    const {id} = req.params
    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id])
        if(result.rows.length ===0){
            res.status(400).json({Message: 'Tem nada aqui não chará!'});

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Fodeu tudo, tenta de novo'});
    }
}

exports.updateOne = async (req, res) => {
    const {id} = req.params
    const { name, document, email, birthday } = req.body;
    try {
        const result = await pool.query('UPDATE users SET name = $1, document = $2, email, $3, birthday = $4 WHERE id = $5', [id, name, document, email, birthday]);
        if(result.rows.length ===0){
            res.status(400).json({Message: 'Tem nada aqui não chará!'});

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Fodeu tudo, tenta de novo'});
    }
}

exports.deleteOne = async (req, res) => {
    const {id} = req.params
    try {
        const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        if(result.rows.length === result){
            res.status(200).json({Message: 'Usuario extinto.'});

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Fodeu tudo, tenta de novo'});
    }
}

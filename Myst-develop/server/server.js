const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'mydb',
    password: 'password',
    port: 5432
});

app.get('/games/:gameId/languages', (req, res) => {
    const gameId = req.params.gameId;
    pool.query(
        'SELECT language.name FROM language INNER JOIN game_language ON language.language_id = game_language.language_id INNER JOIN game ON game.game_id = game_language.game_id WHERE game.game_id = $1',
        [gameId],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error retrieving languages for game');
            } else {
                const languageNames = result.rows.map(row => row.name);
                res.json(languageNames);
            }
        }
    );
});


app.get('/games/:gameId/gameInfo', async (req, res) => {
    const gameId = req.params.gameId;
    pool.query('SELECT * FROM game WHERE game_id = $1', [gameId])
        .then(result => {
            if (result.rows.length === 0) {
                res.status(404).send('Game not found');
            } else {
                const gameInfo = result.rows[0];
                res.send(gameInfo);
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal server error');
        });
});

app.get('/reviews', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM reviews');
        const reviews = result.rows;
        res.status(200).json(reviews);
        client.release();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/reviews/users', (req, res) => {
    const query = 'SELECT reviews.*, users.name, users.image, users.reviewCount, users.gamesOwned FROM reviews JOIN users ON reviews.user_id = users.user_id';
    pool.query(query, (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(results.rows);
        }
    });
});


app.listen(3000, () => {
    console.log('Server listening on port 3000')
})
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    if(req.isAuthenticated()){
        console.log('req.user:', req.user);
        let queryText = `SELECT * FROM "batch";`;
        pool.query(queryText)
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error in GET route server side', error);
            res.sendStatus(404);
        })
    }else{
        res.sendStatus(403);
    }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    if(req.isAuthenticated()){
        console.log('req.user:', req.user);
        try{
            let insertBatchText = `INSERT INTO "batch" ("user_id", "beer_id", "batch_name")
                                    VALUES ($1, $2, $3);`;
            await pool.query(insertBatchText, [req.user.id, req.body.beer_id, req.body.batch_name]);
            res.sendStatus(201);
        }catch (error) {
            console.log('Error in server side POST', error);
            res.sendStatus(404);
        }
    }else{
        res.sendStatus(403);
    }
});

module.exports = router;
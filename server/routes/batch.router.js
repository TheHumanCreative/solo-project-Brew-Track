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
router.post('/', async (req, res) => {
    if(req.isAuthenticated()){
        console.log('req.user:', req.user);
        try{
            let insertBatchText = `INSERT INTO "batch" ("user_id","batch_name", "temp_hlt", "temp_mash_in", "temp_mash_out", "time_boil", "notes")
                                    VALUES ($1, $2, $3, $4, $5, $6, $7);`;
            await pool.query(insertBatchText, [req.body.user.id, req.body.batch_name, req.body.temp_hlt, req.body.temp_mash_in, req.body.temp_mash_out, req.body.time_boil, req.body.notes]);
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
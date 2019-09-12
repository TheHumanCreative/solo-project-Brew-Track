const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    if(req.isAuthenticated()){
        console.log('req.user:', req.user);
        let queryText = `SELECT * FROM "batch"
                        JOIN "style" ON "style".id = "batch".beer_id;`;
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
            let insertBatchText = `INSERT INTO "batch" ("user_id", "beer_id", "beer_type", "beer_name", "batch_name", "temp_hlt", "mash_in_temp", "mash_out_temp", "time_boil", "notes") 
                                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;
            await pool.query(insertBatchText, [req.body.user.id, req.body.beer_name, req.body.batch_name, req.body.temp_hlt, req.body.mash_in_temp, req.body.mash_out_temp, req.body.time_boil, req.body.notes], [req.body.beer_type]);
            res.sendStatus(201);
        }catch (error) {
            console.log('Error in server side POST', error);
            res.sendStatus(404);
        }
    }else{
        res.sendStatus(403);
    }
});


router.delete('/batch/:id', (req, res) => {
    console.log(req.body, req.user);

    if(req.isAuthenticated()){
        console.log('req.user:', req.user);
            let queryText = `DELETE FROM "batch" WHERE "user.id = $1 AND "id" = $2;`;
            pool.query(queryText, [req.user_id, req.params.id])
            .then(results => res.sendStatus(201))
            .catch(error => {
                console.log('Error in server side DELETE', error);
                res.sendStatus(404);
            }) 
    }else{
        res.sendStatus(403)
    }
});

module.exports = router;
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    if(req.isAuthenticated()){
        console.log('req.user:', req.user);
        let queryText = `SELECT "batch".*, "style".beer_type FROM "batch"
                        JOIN "style" ON "style".id = "batch".style_id;`;
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
        console.log(req.body);
        
        try{
            let insertBatchText = `INSERT INTO "batch" ("user_id", "style_id", "beer_name", "batch_name", "temp_hlt", "temp_mash_in", "temp_mash_out", "time_boil", "notes") 
                                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`;
            await pool.query(insertBatchText, [req.user.id, req.body.style_id, req.body.beer_name, req.body.batch_name, req.body.temp_hlt, req.body.temp_mash_in, req.body.temp_mash_out, req.body.time_boil, req.body.notes]);
            res.sendStatus(201)
            console.log('Successful POST TO DATABASE!');
        }catch (error) {
            console.log('Error in server side POST', error);
            res.sendStatus(404);
        }
    }else{
        res.sendStatus(403);
    }
});


router.delete('/:id', (req, res) => {
    console.log(req.body, req.user);

    if(req.isAuthenticated()){
        console.log('req.user:', req.user);
            let queryText = `DELETE FROM "batch" WHERE "user_id" = $1 AND "id" = $2;`;
            pool.query(queryText, [req.user.id, req.params.id])
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
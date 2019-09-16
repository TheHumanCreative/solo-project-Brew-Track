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
router.post('/', (req, res) => {
    if(req.isAuthenticated()){
        // console.log('req.user:', req.user);
        console.log('post body: ', req.body);
        
        try{
            let insertBatchText = `INSERT INTO "batch" ("user_id", "style_id", "beer_name", "batch_name", "temp_hlt", "temp_mash_in", "temp_mash_out", "time_boil", "notes") 
                                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`;
            pool.query(insertBatchText, [
                req.user.id,
                req.body.style_id, 
                req.body.beer_name, 
                req.body.batch_name, 
                req.body.temp_hlt, 
                req.body.temp_mash_in, 
                req.body.temp_mash_out, 
                req.body.time_boil, 
                req.body.notes]);
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

router.put('/update', (req, res) => {
    console.log();
    const queryText = `UPDATE "batch" SET "style_id" = $1, "beer_name" = $2,
                        "batch_name" = $3, "temp_hlt" = $4, "temp_mash_in" = $5,
                        "temp_mash_out" = $6, "time_boil" = $7, "notes" = $8 WHERE "id" = $9;`;
            pool.query(queryText, [
              req.body.style_id,
              req.body.beer_name,
              req.body.batch_name,
              req.body.temp_hlt,
              req.body.temp_mash_in,
              req.body.temp_mash_out,
              req.body.time_boil,
              req.body.notes
            ])
                .then ((results) => {
                   res.sendStatus(201);
                   console.log(results);
                   console.log("Successful UPDATE TO DATABASE!"); 
                })
                .catch (error => {
                    console.log('error in Update route', error);
                    res.sendStatus(500);
                })
            
})

module.exports = router;
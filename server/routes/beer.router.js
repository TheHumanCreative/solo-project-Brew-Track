const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get('/', (req,res) => {
    if(req.isAuthenticated()){
        console.log('req.user:', req.user);
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

router.post('/', (req, res) => {
    if(req.isAuthenticated()){
        console.log('req.user:', req.user);
        let queryText = `INSERT INTO "beer" ("beer_name", "style_id")
                            VALUES ($1, $2);`;
        pool.query(queryText, [req.body.beer_name, req.body.style_id])
        .then(results => res.sendStatus(201))
        .catch(error => {
            console.log('Error in server side POST', error);
        })
    }else{
        res.sendStatus(403);
    }
});

router.delete('/:id', (req, res) => {
    console.log(req.body, req.user);
    
    if(req.isAuthenticated()){
        let queryText = `DELETE FROM "beer" WHERE "user_id" = $1 AND "id" = $2;`;
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

router.put('/:id', (req, res) => {
    if(req.isAuthenticated()){
        console.log('req.user:', req.user);
        let queryText = `INSERT INTO "beer" ("beer_name", "style_id") VALUES ($1, $2);`;
        pool.query(queryText, [req.body.beer_name, req.body.style_id])
        .then(results => res.sendStatus(201))
        .catch(error => {
            console.log('Error in server side PUT', error);
        })
    }else{
        res.sendStatus(403);
    }
});
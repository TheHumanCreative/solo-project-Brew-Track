const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route
 */
// target one specific id from the database as a batch and get that Data.
router.get("/:id", (req, res) => {
  if (req.isAuthenticated()) {
    console.log("req.user:", req.user);
    let id = req.params.id;
    let queryText = `SELECT * FROM "batch" WHERE "id" = $1;`;
    pool
      .query(queryText, [id])
      .then((results) => {
        res.send(results.rows[0])
        })
      .catch(error => {
        console.log("Error in GET route server side", error);
        res.sendStatus(404);
      });
  } else {
    res.sendStatus(403);
  }
});
/**
 * UPDATE route
 */
// target the specific id shown on the DOM and set the new values and send it to the Database. 
router.put("/", (req, res) => {
  console.log();
  const queryText = `UPDATE "batch" SET "style_id" = $1, "beer_name" = $2,
                        "batch_name" = $3, "temp_hlt" = $4, "temp_mash_in" = $5,
                        "temp_mash_out" = $6, "time_boil" = $7, "notes" = $8 WHERE "id" = $9;`;
  pool
    .query(queryText, [
      req.body.style_id,
      req.body.beer_name,
      req.body.batch_name,
      req.body.temp_hlt,
      req.body.temp_mash_in,
      req.body.temp_mash_out,
      req.body.time_boil,
      req.body.notes,
      req.body.id
    ])
    .then(results => {
      res.sendStatus(201);
      console.log(results);
      console.log("Successful UPDATE TO DATABASE!");
    })
    .catch(error => {
      console.log("error in Update route", error);
      res.sendStatus(500);
    });
});


module.exports = router;
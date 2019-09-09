
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "batch"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" INT NOT NULL REFERENCES "user"(id),
    "beer_id" INT NOT NULL REFERENCES beer(id),
    "batch_name" VARCHAR (255) NOT NULL,
    "temp_hlt" INT,
    "temp_mash_in" INT,
    "temp_mash_out" INT,
    "time_boil" INT,
    "notes" VARCHAR (1000)
);


CREATE TABLE "style"
(
    "id" SERIAL PRIMARY KEY,
    "beer_type" VARCHAR(255)
);

CREATE TABLE "beer"
(
    "id" SERIAL PRIMARY KEY,
    "beer_name" VARCHAR (255) NOT NULL,
    "style_id" INT NOT NULL REFERENCES style(id)
);

CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(255),
    "password" VARCHAR(255)
);

INSERT INTO "style"
    ("beer_type")
VALUES
    ('Amber Ale'),
    ('Pale Ale'),
    ('IPA'),
    ('Sour'),
    ('Brown Ale');

INSERT INTO "beer"
    ("beer_name", "style_id")
VALUES
    ('Amberthyst', 1),
    ('Lampshade', 2),
    ('ChordTangle', 3),
    ('Pentagram', 4),
    ('SmoresBier', 5);

INSERT INTO "batch"
    ("user_id", "beer_id", "batch_name","temp_hlt", "temp_mash_in", "temp_mash_out", "time_boil", "notes")
VALUES
    ('2', '4', 'Griffins Batch 01', '175', '165', '160', '60', 'This batch will be a drain pour.');
---MADE TEST DATA---	

SELECT *
FROM "batch"
    JOIN "user" ON "user".id = "batch".user_id;
---MADE A GRAB FOR ALL USERS BATCH---

SELECT *
FROM "batch"
    JOIN "user" ON "user".id = "batch".user_id
WHERE "batch".user_id = 1;
---MADE A GRAB FOR USER SPECIFIC BATCHES---WORKS -- CHANGE THE 1 to anything matching a user. WILL BE $1 when it is done.

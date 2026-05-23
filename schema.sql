
CREATE TABLE users(
 id SERIAL PRIMARY KEY,
 name VARCHAR(100),
 email VARCHAR(120),
 password TEXT
);

CREATE TABLE products(
 id SERIAL PRIMARY KEY,
 title VARCHAR(200),
 price INTEGER
);

CREATE TABLE orders(
 id SERIAL PRIMARY KEY,
 user_id INTEGER,
 total INTEGER
);

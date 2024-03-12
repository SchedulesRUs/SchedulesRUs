Drop table request;
CREATE TABLE IF NOT EXISTS request (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    created_date VARCHAR NOT NULL,
    start VARCHAR,
    "end" VARCHAR,
    reason VARCHAR,
    "status" VARCHAR,
    "username" VARCHAR
);

INSERT INTO request (user_id, created_date, start, "end", reason,status,username)
VALUES
    (12, '2024-03-01', '2024-03-01', '2024-03-01', 'Meeting','Pending','Ngoc'),
        (12, '2024-03-01', '2024-03-01', '2024-03-01', 'Meeting','Pending','Ngoc'),
            (12, '2024-03-01', '2024-03-01', '2024-03-01', 'Meeting','Pending','Ngoc');
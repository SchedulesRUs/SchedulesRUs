-- Drop the table if it exists
DROP TABLE IF EXISTS public.schedule_info;

-- Create the table with the appropriate case and data types
CREATE TABLE public.schedule_info (
    "allDay" BOOLEAN NOT NULL,
    color VARCHAR NOT NULL,
    "end" VARCHAR NOT NULL,
    id SERIAL PRIMARY KEY,
    "start" VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    "userId" INTEGER NOT NULL
);

-- Insert mock data into the table
INSERT INTO
    public.schedule_info (
        "allDay",
        color,
        "end",
        id,
        "start",
        title,
        "userId"
    )
VALUES
    (
        true,
        '#ff0000',
        '2024-03-01 17:00:00',
        1,
        '2024-03-01 09:00:00',
        'Alex',
        1
    ),
    (
        false,
        '#00ff00',
        '2024-03-02 18:00:00',
        2,
        '2024-03-02 14:00:00',
        'Jordan',
        2
    ),
    (
        false,
        '#0000ff',
        '2024-03-03 15:00:00',
        3,
        '2024-03-03 13:00:00',
        'Taylor',
        3
    ),
    (
        true,
        '#ffff00',
        '2024-03-04 00:00:00',
        4,
        '2024-03-04 00:00:00',
        'Morgan',
        4
    ),
    (
        false,
        '#ff00ff',
        '2024-03-05 12:00:00',
        5,
        '2024-03-05 08:00:00',
        'Casey',
        5
    ),
    (
        true,
        '#00ffff',
        '2024-03-06 17:00:00',
        6,
        '2024-03-06 09:00:00',
        'Riley',
        6
    ),
    (
        false,
        '#ff8000',
        '2024-03-07 18:00:00',
        7,
        '2024-03-07 14:00:00',
        'Charlie',
        7
    ),
    (
        true,
        '#0080ff',
        '2024-03-08 15:00:00',
        8,
        '2024-03-08 11:00:00',
        'Jamie',
        8
    ),
    (
        false,
        '#8000ff',
        '2024-03-09 16:00:00',
        9,
        '2024-03-09 12:00:00',
        'Pat',
        9
    ),
    (
        true,
        '#ff0080',
        '2024-03-10 17:00:00',
        10,
        '2024-03-10 09:00:00',
        'Drew',
        10
    );
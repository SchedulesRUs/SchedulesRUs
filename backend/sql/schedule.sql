-- Drop the table if it exists
DROP TABLE IF EXISTS EmpSchedule CASCADE;

-- Create the table
CREATE TABLE EmpSchedule(
    ID INTEGER NOT NULL,
    EmpName VARCHAR(10) NOT NULL,
    "start" TIMESTAMP,
    "end" TIMESTAMP,
    color VARCHAR(7)
);

-- Insert data into the table
INSERT INTO
    EmpSchedule (ID, EmpName, "start", "end", color)
VALUES
    (
        1,
        'Paradon',
        '2024-01-31 15:00:00',
        '2024-01-31 23:59:59',
        '#ff5733'
    ),
    (
        2,
        'Khang',
        '2024-02-01 15:00:00',
        '2024-02-01 18:30:00',
        '#33ff57'
    ),
    (
        3,
        'Paradon',
        '2024-02-02 00:00:00',
        '2024-02-02 05:00:00',
        '#5733ff'
    ),
    (
        4,
        'Paradon',
        '2024-02-03 15:00:00',
        '2024-02-03 23:59:59',
        '#f6e05e'
    );
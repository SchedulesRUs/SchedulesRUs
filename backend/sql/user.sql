-- Drop the table if it exists
DROP TABLE IF EXISTS user

CREATE TABLE IF NOT EXISTS user (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                userColor VARCHAR(255),
                phone VARCHAR(255),
                isAdmin VARCHAR(255),
                role VARCHAR(255),
                address VARCHAR(255),
                image VARCHAR(255)
            )

-- Insert data into the table
INSERT INTO
    user (
        username,
        password,
        email,
        userColor,
        phone,
        isAdmin,
        role,
        address,
        image
    )
VALUES
    (
        1,
        'Brian',
        'brian.m95@gmail.com',
        '444-561-5913',
        '37606 Stephanie Loop Apt. 318, Lake Sonia, YT V4V 3N4',
        'Manager',
        'Active'
    ),
    (
        2,
        'Paradon',
        'paradon.m95@gmail.com',
        '825-561-5913',
        '7697 Beverly Flat Suite 076, North Lorettaborough, ON J8L 4N4',
        'Cooker',
        'Active'
    ),
    (
        3,
        'Khitikhun',
        'khit.m95@gmail.com',
        '615-561-5913',
        '1171 Brittney Tunnel Suite 972, Carolshire, NS Y5M 1J2',
        'Cashier',
        'Active'
    ),
    (
        4,
        'Khang',
        'khang.m95@gmail.com',
        '444-533-5913',
        '241 Tami Island Suite 724, Angelaton, ON C3A 2R7',
        'Cooker',
        'Active'
    ),
    (
        5,
        'Sailor',
        'sailor.m95@gmail.com',
        '444-561-2923',
        '4717 Raymond Passage Apt. 602, Rushfurt, NL N5P 3S7',
        'Cleaner',
        'Active'
    ),
    (
        6,
        'Nancy',
        'nancy.m95@gmail.com',
        '674-561-5913',
        '643 David Spurs Suite 623, New Rachel, NL N6P 7G9',
        'Cooker',
        'Active'
    ),
    (
        7,
        'Liz',
        'liz.m95@gmail.com',
        '444-561-5245',
        '8227 Walker Vista Apt. 724, North Derekborough, SK C9P 8P7',
        'Cashier',
        'Active'
    ),
    (
        8,
        'Felix',
        'felix.m95@gmail.com',
        '444-561-7095',
        '4430 Michael Roads, Wagnerport, PE K9A1B4',
        'Cooker',
        'Active'
    ),
    (
        9,
        'Wesly',
        'wesly.m95@gmail.com',
        '444-561-2103',
        '4430 Michael Roads, Saksterwon, PE K9A1B4',
        'Cleaner',
        'Active'
    );
DROP TABLE Employee CASCADE CONSTRAINTS;

CREATE TABLE Employee (
    ID                  NUMBER(2) NOT NULL,
    EmpName             VARCHAR2(10) NOT NULL,
    Email               VARCHAR(255) NOT NULL,
    PhoneNum            VARCHAR(10) NOT NULL,
    EmpAddress          VARCHAR2(255) NOT NULL,
    EmpRole             VARCHAR2(20) NOT NULL,
    EmpStatus           VARCHAR(10) NOT NULL,
);

INSERT INTO Employee VALUES (1, 'Brian', 'brian.m95@gmail.com','444-561-5913','37606 Stephanie Loop Apt. 318, Lake Sonia, YT V4V 3N4','Manager','Active');
INSERT INTO Employee VALUES (2, 'Paradon', 'paradon.m95@gmail.com', '825-561-5913','7697 Beverly Flat Suite 076, North Lorettaborough, ON J8L 4N4','Cooker', 'Active');
INSERT INTO Employee VALUES (3, 'Khitikhun','khit.m95@gmail.com', '615-561-5913', '1171 Brittney Tunnel Suite 972, Carolshire, NS Y5M 1J2','Cashier','Active' );
INSERT INTO Employee VALUES (4, 'Khang','khang.m95@gmail.com','444-533-5913','241 Tami Island Suite 724, Angelaton, ON C3A 2R7','Cooker','Active' );
INSERT INTO Employee VALUES (5, 'Sailor', 'sailor.m95@gmail.com','444-561-2923','4717 Raymond Passage Apt. 602, Rushfurt, NL N5P 3S7','Cleaner','Active');
INSERT INTO Employee VALUES (6, 'Nancy', 'nancy.m95@gmail.com','674-561-5913','643 David Spurs Suite 623, New Rachel, NL N6P 7G9','Cooker', 'Active');
INSERT INTO Employee VALUES (7, 'Liz', 'liz.m95@gmail.com', '444-561-5245', '8227 Walker Vista Apt. 724, North Derekborough, SK C9P 8P7','Cashier', 'Active');
INSERT INTO Employee VALUES (8, 'Felix', 'felix.m95@gmail.com', '444-561-7095', '4430 Michael Roads, Wagnerport, PE K9A1B4', 'Cooker', 'Active');
INSERT INTO Employee VALUES (9, 'Wesly', 'wesly.m95@gmail.com','444-561-2103', '4430 Michael Roads, Saksterwon, PE K9A1B4', 'Cleaner', 'Active');

commit;
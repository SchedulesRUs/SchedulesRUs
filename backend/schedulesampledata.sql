DROP TABLE EmpSchedule CASCADE CONSTRAINTS;

CREATE TABLE EmpSchedule(
    ID                  NUMBER(2) NOT NULL,
    EmpName             VARCHAR2(10) NOT NULL,
    start               DATETIME,
    end                 DATETIME,
    color               VARCHAR(6),
);

INSERT INTO EmpSchedule (id, title, start, end, color) VALUES
('1', 'Paradon', '2024-01-31 15:00:00', '2024-01-31 24:00:00', '#ff5733'),
('2', 'Khang', '2024-02-01 15:00:00', '2024-02-01 18:30:00', '#33ff57'),
('3', 'Paradon', '2024-02-01 24:00:00', '2024-02-01 05:00:00', '#5733ff'),
('4', 'Paradon', '2024-02-03 15:00:00', '2024-01-31 24:00:00', '#f6e05e');

commit;



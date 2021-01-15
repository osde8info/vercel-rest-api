CREATE TABLE contacts(
id INT(11) PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100),
tel VARCHAR(40),
mbl VARCHAR(40),
fax VARCHAR(40),
email VARCHAR(80),
address VARCHAR(200) 
)ENGINE=INNODB;


INSERT INTO contacts(name,tel,email,addr) VALUES 
('fred1','0201','fred1@example.com','1 high st'),
('fred2','0202','fred2@example.com','2 high st'),
('fred3','0203','fred3@example.com','3 high st'),
('fred4','0204','fred4@example.com','4 high st');


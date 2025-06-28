CREATE TABLE tusuarios (
  id SERIAL PRIMARY KEY,
  usuario VARCHAR(50),
  password VARCHAR(50)
);
INSERT INTO tusuarios (usuario, password) VALUES ('admin', '1234');
INSERT INTO tusuarios (usuario, password) VALUES ('slorse', 'xd');
select * from tusuarios

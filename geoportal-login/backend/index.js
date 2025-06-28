const express = require('express');
const cors = require('cors');
const db = require('./conexion');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

//Ruta de login
app.post('/login', async (req, res) => {
  const { usuario, password } = req.body;
  try {
    const result = await db.query(
      'SELECT * FROM tusuarios WHERE usuario = $1 AND password = $2',
      [usuario, password]
    );
    if (result.rows.length > 0) {
      res.json({ status: 'ok', mensaje: 'login exitoso' });
    } else {
      res.status(401).json({ status: 'error', mensaje: 'credenciales incorrectas' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', mensaje: 'error del servidor' });
  }
});

// Escucha en el puerto correcto
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

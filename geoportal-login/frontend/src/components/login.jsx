import { useState } from 'react';
import axios from 'axios';
import '../login.css';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('https://backend-nameless-log-5539.fly.dev/login', {
        usuario,
        password
      });

      if (res.data.status === 'ok') {
        alert('✅ Login exitoso');

      }
    } catch (err) {
      setError(err.response?.data?.mensaje || '❌ Error al conectar');
    } finally {
      setLoading(false);
    }
  };

  return (

    
    <div className="login-container">
      <div className='logos'>
      <div>
  <img src="/imgs/LogoRojolg.png" alt="Logo"/>
   </div>
        <div>
        <h2>
  2024<br />
  TRÁMITE<br />
  DOCUMENTARIO<br />
  TRANSPORTE
</h2>
      </div>
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <h1>BIENVENIDO</h1>
<b style={{ color: 'white', width: '20px', fontSize: '18px' }}>
  Ingresa tus credenciales para iniciar sesión
</b>
<br />

     <b style={{ display: 'block', textAlign: 'left', marginBottom: '20px', color: 'white' }}>
  Usuario
</b>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
        <b style={{ display: 'block', textAlign: 'left', marginBottom: '20px', color: 'white' }}>Password</b>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? '⏳ Verificando...' : ' Entrar'}
        </button>
      </form>
    </div>

  );
}

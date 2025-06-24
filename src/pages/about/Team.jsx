import { Link, useLocation, useSearchParams } from 'react-router-dom'

export default function Team() {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const user = searchParams.get('user')

  return (
    <div className="sub-page">
      <h2>Nuestro Equipo</h2>
      <p>Conoce al increíble equipo detrás de nuestro proyecto.</p>
      
      {user && (
        <p className="welcome-message">
          ¡Bienvenido, {user}!
        </p>
      )}

      {location.state && (
        <div className="navigation-info">
          <p>Navegaste desde: {location.state.from}</p>
          <p>Hora: {location.state.time}</p>
        </div>
      )}

      <Link to="/about/history" className="sub-nav-link">Ver Historia</Link>
      <Link to="/navigation" className="sub-nav-link">Ir a Ejemplos de Navegación</Link>
    </div>
  )
}

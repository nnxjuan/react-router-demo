import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()
  const [username, setUsername] = useState('')

  // Navegación simple
  const handleSimpleNavigation = () => {
    navigate('/about')
  }

  // Navegación con reemplazo (no agrega a la historia)
  const handleReplaceNavigation = () => {
    navigate('/about', { replace: true })
  }

  // Navegación con estado
  const handleStateNavigation = () => {
    navigate('/about/team', { 
      state: { 
        from: location.pathname,
        time: new Date().toLocaleTimeString() 
      }
    })
  }

  // Navegación relativa
  const handleRelativeNavigation = () => {
    navigate('../') // Navega un nivel arriba
  }

  // Navegación con número (similar a window.history.go)
  const handleHistoryNavigation = () => {
    navigate(-1) // Equivalente a ir atrás
  }

  // Navegación con parámetros de consulta
  const handleQueryNavigation = () => {
    navigate(`/about/team?user=${username}`)
  }

  return (
    <div className="page">
      <h1>Ejemplos de Navegación</h1>
      
      <div className="nav-examples">
        <button onClick={handleSimpleNavigation} className="nav-button">
          Ir a About
        </button>

        <button onClick={handleReplaceNavigation} className="nav-button">
          Ir a About (Reemplazar)
        </button>

        <button onClick={handleStateNavigation} className="nav-button">
          Ir a Team con Estado
        </button>

        <button onClick={handleRelativeNavigation} className="nav-button">
          Navegar Arriba
        </button>

        <button onClick={handleHistoryNavigation} className="nav-button">
          Volver Atrás
        </button>

        <div className="query-navigation">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingresa un nombre"
            className="nav-input"
          />
          <button onClick={handleQueryNavigation} className="nav-button">
            Navegar con Query
          </button>
        </div>
      </div>

      {location.state && (
        <div className="state-info">
          <h3>Estado Actual:</h3>
          <pre>{JSON.stringify(location.state, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

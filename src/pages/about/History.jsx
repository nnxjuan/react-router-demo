import { Link } from 'react-router-dom'

export default function History() {
  return (
    <div className="sub-page">
      <h2>Nuestra Historia</h2>
      <p>Descubre cómo comenzamos y hacia dónde vamos.</p>
      <Link to="/about/team" className="sub-nav-link">Ver Equipo</Link>
    </div>
  )
}

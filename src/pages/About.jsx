import { Link, Outlet } from 'react-router-dom'

export default function About() {
  return (
    <div className="page">
      <h1>Sobre Nosotros</h1>
      <nav className="sub-nav">
        <Link to="/about/team" className="sub-nav-link">Equipo</Link>
        <Link to="/about/history" className="sub-nav-link">Historia</Link>
      </nav>
      <Outlet />
    </div>
  )
}

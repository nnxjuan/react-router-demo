import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="layout">
      <nav className="main-nav">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/about" className="nav-link">Sobre Nosotros</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

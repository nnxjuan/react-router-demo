import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page">
      <h1>Página Principal</h1>
      <p>Bienvenido a nuestro ejemplo de React Router</p>
      <Link to="/about" className="nav-link">Ir a Sobre Nosotros</Link>
    </div>
  )
}

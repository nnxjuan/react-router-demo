import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/about/Team'
import History from './pages/about/History'
import Navigation from './pages/Navigation'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />} />
            <Route path="history" element={<History />} />
          </Route>
          <Route path="/navigation" element={<Navigation />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

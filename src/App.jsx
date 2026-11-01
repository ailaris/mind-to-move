import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Demo from './pages/Demo'
import Future from './pages/Future'
import Team from './pages/Team'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/future" element={<Future />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
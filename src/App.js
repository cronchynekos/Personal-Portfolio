import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/Personal-Portfolio/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/Personal-Portfolio/about" element={<About />} />
          <Route path="/Personal-Portfolio/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

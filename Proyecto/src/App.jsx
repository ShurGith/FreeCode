import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'
import UnicoDetails from './components/UnicoDetails'
import ItemList from './components/ItemList'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Nosotros from './pages/Nosotros'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<UnicoDetails />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/' element={<Home />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default App

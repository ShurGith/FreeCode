import './App.css'
import Navbar from './components/Navbar'
import PedirDatos from './components/itemListContainer'
import Footer from './components/Footer'
import UnicoDetails from './components/UnicoDetails'
function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {/*     <PedirDatos /> */}
        <UnicoDetails itemId={7} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Nacionais from './components/pages/Nacionais'
import Internacionais from './components/pages/Internacionais'
import Contatos from './components/pages/Contatos'
import Promocoes from './components/pages/Promocoes'
import Viagem from './components/pages/Viagem'
import Administracao from './components/pages/Administracao'
import Footer from './components/layout/Footer'
import NavBar from './components/layout/NavBar'



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container-fluid mb-5 justify-content-center align-content-center">
          <Routes>
            <Route path="/" element={<Home />}> Home </Route>
            <Route path="/Nacionais" element={<Nacionais />}> Nacionais </Route>
            <Route path="/Internacionais" element={<Internacionais />}> Internacionais </Route>
            <Route path="/Promocoes" element={<Promocoes />}> Promoções </Route>
            <Route path="/Viagem" element={<Viagem />}> Viagem </Route>
            <Route path="/Contatos" element={<Contatos />} > Contatos </Route>
            <Route path="/Administracao" element={<Administracao />}> Administracao </Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
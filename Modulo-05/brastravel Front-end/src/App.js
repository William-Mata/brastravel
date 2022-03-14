import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Nacionais from './components/pages/Nacionais'
import Internacionais from './components/pages/Internacionais'
import Contatos from './components/pages/Contatos'
import Promocoes from './components/pages/Promocoes'
import Administracao from './components/pages/Administracao'
import Footer from './components/layout/Footer'
import NavBar from './components/layout/NavBar'
import Login from './components/pages/Login'
import Registrar from './components/pages/Registrar'
import GerenciarConta from './components/pages/GerenciarConta'
import CadastroDadosCliente from './components/pages/CadastroDadosCliente'
import ComprasCliente from './components/pages/ComprasCliente'



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="row w-100 p-0 m-0 justify-content-center align-content-center mb-5">
          <Routes>
            <Route path="/" element={<Home />}> Home </Route>
            <Route path="/Nacionais" element={<Nacionais />}> Nacionais </Route>
            <Route path="/Internacionais" element={<Internacionais />}> Internacionais </Route>
            <Route path="/Promocoes" element={<Promocoes />}> Promoções </Route>
            <Route path="/Contatos" element={<Contatos />} > Contatos </Route>
            <Route path="/Administracao" element={<Administracao />}> Administracao </Route>
            <Route path="/Login" element={<Login />}> Login </Route>
            <Route path="/Registrar" element={<Registrar />}> Registrar </Route>
            <Route path="/GerenciarConta" element={<GerenciarConta />}> Gerenciar Conta</Route>
            <Route path="/CadastroDadosCliente" element={<CadastroDadosCliente />}> Cadastro Dados Cliente</Route>
            <Route path="/ComprasCliente" element={<ComprasCliente/>}>Compras Cliente</Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
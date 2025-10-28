import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import ListaTemas from './components/tema/listatemas/ListaTemas'
import { AuthProvider } from './contexts/AuthContext'
import Cadastro from './pages/cadastro/Cadastro'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import FormTema from './components/tema/formtema/FormTema'

// Componente principal da aplicação
function App() {

	// Retorna o JSX do componente App, que inclui o roteamento e a estrutura principal da aplicação
	return (
		<>

		<AuthProvider>
			<BrowserRouter>
				<Navbar/>
					<div className='min-h-[80vh]'>
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path='/home' element={<Home />}/>
							<Route path="/cadastro" element={<Cadastro />} />
							<Route path="/temas" element={<ListaTemas />} />
							<Route path="/cadastrartema" element={<FormTema />} />
							<Route path="/editartema/:id" element={<FormTema />} />
						</Routes>
					</div>
				<Footer/>
			</BrowserRouter>
		</AuthProvider>
		</>
	)
}

// Exporta o componente App para uso em outras partes da aplicação
export default App
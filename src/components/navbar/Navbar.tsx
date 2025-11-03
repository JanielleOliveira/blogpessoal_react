import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

  const navigate = useNavigate();

  const { usuario, handleLogout} = useContext(AuthContext)

  // função para efetuar o logout e redirecionar para a página de login
  function logout() {
    handleLogout()
    ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
    navigate('/')
  }

  let component: ReactNode

  if (usuario.token !== ""){
    
    component = (

       <div className="w-full flex justify-center py-4 bg-slate-900 text-slate-100 shadow-md shadow-emerald-500/20">
        <div className="container flex justify-between text-lg mx-8">
          <Link
            to="/home"
            className="text-3xl font-extrabold text-emerald-400 tracking-wide hover:text-emerald-300 transition-colors duration-200"
          >
            Console<span className="text-slate-300">.Blog</span>
          </Link>

          <div className="flex gap-6 items-center">
            <Link to="/postagens" className="hover:text-emerald-400 transition-colors">Postagens</Link>
            <Link to="/temas" className="hover:text-emerald-400 transition-colors">Temas</Link>
            <Link to="/cadastrartema" className="hover:text-emerald-400 transition-colors">Cadastrar tema</Link>
            <Link to="/perfil" className="hover:text-emerald-400 transition-colors">Perfil</Link>
            <Link to="" onClick={logout} className="hover:text-red-400 transition-colors">Sair</Link>
          </div>
        </div>
      </div>

    )
  }

    
    return (
        <>
           {component}
        </>
    )
}

export default Navbar
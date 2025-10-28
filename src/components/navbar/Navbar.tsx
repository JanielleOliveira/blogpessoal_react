import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

  const navigate = useNavigate();

  const {handleLogout} = useContext(AuthContext)

  // função para efetuar o logout e redirecionar para a página de login
  function logout() {
    handleLogout()
    alert('O usuário foi desconectado com sucesso!')
    navigate('/')
  }

    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-orange-200 text-yellow-950'>
            
                <div className="container flex justify-between text-lg mx-8">
                   <Link to='/home' className="text-2xl font-bold">A Garota do Blog</Link>

                    <div className='flex gap-4'>
                        Postagens
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        Cadastrar tema
                        Perfil
                         <Link to='' onClick={logout}>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
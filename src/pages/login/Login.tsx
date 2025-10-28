/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";

function Login() {

  // hook do react-router-dom para navegação entre páginas.
  const navigate = useNavigate();

  // obtém os dados do contexto de autenticação
  const {usuario, handleLogin, isLoading} = useContext(AuthContext)

  // estado local para armazenar os dados do formulário de login
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin)

  // redireciona para a página de home se o usuário estiver logado (token diferente de vazio)
  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario])

  // atualiza o estado do usuarioLogin conforme o usuário digita nos campos do formulário. Essa abordagem é conhecida como "controlled components" no React
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  // função chamada ao submeter o formulário de login
  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4" 
                onSubmit={login}>

                    <h2 className="text-slate-900 text-5xl ">Entrar</h2>

                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}

                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}

                        />
                    </div>
                    <button 
                        type='submit' 
                        className="rounded bg-indigo-400 flex justify-center
                                   hover:bg-indigo-700 text-white w-1/2 py-2">

                        {isLoading ? 
                            <ClipLoader 
                            color="#ffffff" 
                            size={24} 
                            /> : 
                            <span>Entrar</span>
                        }
                    </button>

                    <hr className="border-slate-800 w-full" />

                   <p>
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-indigo-500 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
                 <div className="bg-[url('https://st3.depositphotos.com/32629564/36064/v/450/depositphotos_360646642-stock-illustration-young-african-american-woman-laptop.jpg')] lg:block hidden bg-no-repeat 
                            w-full min-h-screen bg-cover bg-center"
                ></div>
            </div>
        </>
    );
}

export default Login;
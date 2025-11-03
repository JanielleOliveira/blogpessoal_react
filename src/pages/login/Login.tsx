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
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center bg-slate-950 font-bold ">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4  bg-slate-900/80 p-9" 
                onSubmit={login}>

                    <h2 className="text-emerald-400 text-5xl mb-2">Entrar</h2>

                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario" className="text-slate-300">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            className="border-2 border-amber-50 rounded p-2 text-slate-100 placeholder-slate-500"
                            value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}

                        />
                    </div>
                    <div className="flex flex-col bg- w-full">
                        <label htmlFor="senha" className="text-slate-300">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha" 
                            className="border-2 border-amber-50 rounded p-2  text-slate-100 placeholder-slate-500"
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}

                        />
                    </div>
                    <button 
                        type='submit' 
                        className="rounded bg-emerald-700 flex justify-center hover:bg-emerald-500 
                     text-white w-1/2 py-2 transition-colors duration-200 shadow-md shadow-emerald-500/30">

                        {isLoading ? 
                            <ClipLoader 
                            color="#ffffff" 
                            size={24} 
                            /> : 
                            <span>Entrar</span>
                        }
                    </button>

                    <hr className="border-emerald-700 w-full" />

                   <p className="text-slate-400">
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-emerald-500 hover:underline">
                          Cadastre-se
                        </Link>
                    </p>
                </form>
                 <div className="bg-[url('https://img.freepik.com/vetores-gratis/conceito-de-design-web_23-2147841209.jpg')] lg:block hidden bg-no-repeat 
                            w-full min-h-screen bg-cover bg-center"
                ></div>
            </div>
        </>
    );
}

export default Login;
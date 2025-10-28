/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";


function Cadastro() { 
  //Lógica do cadastro vem depois da function e antes do return.

  //Hook do React Router DOM para navegação entre páginas.
  const navigate = useNavigate()

  // Estado para controlar o carregamento durante o cadastro.
  const [isLoading, setIsLoading] = useState<boolean>(false) 

  // Estado para armazenar a confirmação de senha.
  const [confirmarSenha, setConfirmarSenha] = useState<string>('') 

  // Estado para armazenar os dados do usuário a ser cadastrado.
  const [usuario, setUsuario] = useState<Usuario>({ 
    id: 0, 
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  // Efeito automático que verifica se o usuário foi cadastrado com sucesso. Em caso positivo, redireciona para a página de login.
  useEffect(() => {
    if (usuario.id !== 0){// Se o ID do usuário for diferente de 0, significa que o cadastro foi bem-sucedido.
      retornar() // Chama a função para redirecionar para a página de login.
    }
  }, [usuario]) // Monitora mudanças no estado 'usuario'.

  function retornar(){ // Função para redirecionar para a página de login.
    navigate('/') // Usa o hook 'navigate' para mudar para a rota '/login'.
  }

  // Função para atualizar o estado do usuário conforme os campos do formulário são preenchidos.
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setUsuario({ // Atualiza o estado 'usuario' com os novos valores dos campos do formulário.
      ...usuario, // Mantém os valores atuais do estado 'usuario'.
      [e.target.name]: e.target.value // Atualiza o campo específico com o novo valor.
    })
  }

  // Função para atualizar o estado da confirmação de senha.
  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){ 
    setConfirmarSenha(e.target.value)// Atualiza o estado 'confirmarSenha' com o valor do campo de confirmação de senha.
  }

  // Função para cadastrar um novo usuário quando o formulário é submetido. Encaminha os dados para a API Backend.
  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
    e.preventDefault() // Impede que o envio do formulário gere um recarregamento da página.

    // Verifica se a senha e a confirmação de senha coincidem e se a senha tem pelo menos 8 caracteres. Nem envia para a API se a validação falhar.
    if(confirmarSenha === usuario.senha && usuario.senha.length >= 8){

      setIsLoading(true)// Define o estado de carregamento como verdadeiro durante o processo de cadastro.

      // Tenta cadastrar o usuário chamando a função de serviço.
      try{
        //Utiliza axios do serviço Service.ts para enviar uma requisição de cadastro para a API.
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
        // Se o cadastro for bem-sucedido, exibe uma mensagem de sucesso e redireciona para a página de login.
        alert('Usuário cadastrado com sucesso!')
        retornar()
      }catch(error){
        // Se ocorrer um erro durante o cadastro, exibe uma mensagem de erro.
        alert('Erro ao cadastrar o usuário!')
      }

    }else{ // Else da verificação de senha. exibe um alerta e reseta os campos de senha.
      alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.')
      setUsuario({...usuario, senha: ''}) 
      setConfirmarSenha('')
    }

    setIsLoading(false) // Define o estado de carregamento como falso após o processo de cadastro.
  }


  // JSX que define a estrutura visual do formulário de cadastro.
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-2 h-screen 
            place-items-center font-bold">
        <div
          className="bg-[url('https://img.freepik.com/free-vector/businessman-morning-day-schedule-notebook_3446-603.jpg?semt=ais_hybrid&w=740&q=80')] lg:block hidden bg-no-repeat 
                    w-full min-h-screen bg-cover bg-center"
        ></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3'
              onSubmit={cadastrarNovoUsuario}> 
            
          <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}           
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.foto}
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
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button 
                type='reset'
                className='rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2'
                onClick={retornar}
             >
                Cancelar
            </button>
            <button 
                type='submit'
                className='rounded text-white bg-green-300 
                           hover:bg-green-700 w-1/2 py-2
                           flex justify-center' 
                >
                {isLoading ? 
                <ClipLoader 
                color="#ffffff" 
                size={24} 
                /> : 
                <span>Cadastrar</span>
                }
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro
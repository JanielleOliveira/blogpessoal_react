/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, type ReactNode } from 'react';
import type UsuarioLogin from '../models/UsuarioLogin';
import { login } from '../services/Service';
import { ToastAlerta } from '../utils/ToastAlerta';

// interface de tipagem do contexto de autenticação - o que ele vai fornecer - funções e estados.
interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
}

// interface de tipagem das props do provedor do contexto - sempre vai receber children. significa que qualquer componente filho que estiver dentro do AuthProvider vai ter acesso ao contexto.
interface AuthProviderProps {
  children: ReactNode;// ReactNode é um tipo que representa qualquer coisa que pode ser renderizada pelo React (elementos, strings, números, etc).
}

// criação do contexto de autenticação em si, que sempre vai receber o createContext com a tipagem do AuthContextProps
export const AuthContext = createContext({} as AuthContextProps);

// criação do provedor do contexto de autenticação - componente que vai envolver a aplicação e fornecer o contexto para os componentes filhos (children).
export function AuthProvider({ children }: AuthProviderProps) {

  // Cria o estado que armazena os dados do usuário logado, incluindo o token JWT mas com o estado inicial vazio.
  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });

  // Botão de carregamento para indicar que o login está em andamento.
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Função que envia os dados para a API e realiza o login do usuário. se der certo, atualiza o estado com os dados do usuário logado e se der errado, mostra um alerta.
  async function handleLogin(usuarioLogin: UsuarioLogin) {
    setIsLoading(true);

    try {
      await login('/usuarios/logar', usuarioLogin, setUsuario);
      ToastAlerta("Usuário foi autenticado com sucesso!", "sucesso")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      ToastAlerta("Os dados do Usuário estão inconsistentes!", "erro")
    }

    setIsLoading(false);// Finaliza o carregamento após a tentativa de login.
  }

  // Função que limpa os dados do usuário logado, efetua o logout. Sem token, sem acesso às rotas protegidas.
  function handleLogout() {
    setUsuario({
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto: '',
      token: '',
    });
  }

  // Retorna o provedor do contexto, envolvendo os componentes filhos e fornecendo os valores do contexto.
  return(
    <AuthContext.Provider value={{usuario, handleLogin, handleLogout, isLoading}}>
      {children}
    </AuthContext.Provider>
  )
}
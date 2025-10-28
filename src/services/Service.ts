/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */

import axios from "axios"; // Importa a biblioteca Axios para fazer requisições HTTP.

// Configuração da instância do Axios com a URL baase da API
const api = axios.create({ 
  baseURL: 'https://blogpessoal-nest-xbwb.onrender.com' // Url base da API, backend hospedado no render.
});

// Função para cadastrar um novo usuário
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) =>{ 
  const resposta = await api.post(url, dados) // Envia uma requisição POST para a URL especificada com os dados do usuário.
  setDados(resposta.data) // Atualiza o estado com os dados retornados pela API.
}

// Função de login que autentica o usuário e obtém o token JWT
export const login = async (url: string, dados: Object, setDados: Function) => {  // Recebe a URL, os dados do usuário e uma função para atualizar o estado.
  const resposta = await api.post(url, dados)
  setDados(resposta.data) // Atualizado o estado com os dados retornados pela API, incluindo o token JWT.

}

// Função responsável por executar todas as operações de busca de recursos na API, como obter listas de postagens, temas, usuários, etc.
export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header) // Executa uma requisição GET para a URL especificada com os cabeçalhos fornecidos.
    setDados(resposta.data) 
}
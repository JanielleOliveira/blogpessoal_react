/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Tema from "../../../models/Tema";
import { buscar } from "../../../services/Service";
import CardTema from "../cardtema/CardTema";
import { ToastAlerta } from "../../../utils/ToastAlerta";

// Componente ListaTemas para exibir uma lista de temas
function ListaTemas() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [temas, setTemas] = useState<Tema[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    // Verifica se o usuário está logado ao carregar o componente
    useEffect(() => {
      if (token === '') {
        ToastAlerta("É necessário estar logado", 'info')
        navigate('/');
      }
    }, [token]);

    // Busca os temas ao carregar o componente e quando o número de temas mudar
    useEffect(() => {
      buscarTemas();
    }, [temas.length]);

    // Função para buscar os temas da API
    async function buscarTemas() {
      try {
        setIsLoading(true);

        await buscar('/temas', setTemas, {
          headers: { Authorization: token },
        });
      } catch (error: any) { 
        if (error.toString().includes('401')) {
          handleLogout();
        }
      } finally { // Garantir que o carregamento seja desativado após a conclusão da requisição
        setIsLoading(false);
      }
    }


    // Retorna o JSX do componente
    return (
      <>
        { isLoading && 
          (
            <div className="flex justify-center w-full my-8">
              <SyncLoader 
              color="#312e81"
              size={32}
            /> 
            </div>
          )
        }
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {(!isLoading && temas.length === 0) && (
                <span className="text-3xl text-center my-8">
                   Nenhum Tema foi encontrado! </span>) 
              }

              {
                temas.map((tema) => (
                  <CardTema key={tema.id} tema={tema}/>
                ))
              }

            </div>
          </div>
        </div>
      </>
    );
}

// Exporta o componente ListaTemas para uso em outras partes da aplicação.
export default ListaTemas; 
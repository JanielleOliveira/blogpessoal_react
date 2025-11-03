import { Link } from "react-router-dom"
import type Tema from "../../../models/Tema"
 
// Define as propriedades esperadas pelo componente CardTema
interface CardTemaProps {
  tema: Tema
}

// Componente CardTema para exibir informações de um tema
function CardTema({ tema }: CardTemaProps) {

  // Retorna o JSX do componente
  return (

    // Estrutura do card com cabeçalho, descrição e botões de ação
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6  bg-slate-800  text-emerald-300 font-bold text-2xl'>Tema</header> 
      <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>

        <div className='flex'>
          <Link to={`/editartema/${tema.id}`}
            className='w-full text-slate-100 bg-emerald-700 hover:bg-emerald-500 flex items-center justify-center py-2'>
            <button>Editar</button>
          </Link>

          <Link to={`/deletartema/${tema.id}`} 
          className='text-slate-100 bg-red-700 hover:bg-red-500 w-full flex items-center justify-center'>
            <button>Deletar</button>
          </Link>
        </div>

    </div>
  )
}

export default CardTema // Exporta o componente CardTema para uso em outras partes da aplicação

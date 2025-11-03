import { Link } from "react-router-dom";
import type Postagem from "../../../models/Postagem";

interface CardPostagensProps {
  postagem: Postagem;
}

function CardPostagem({ postagem }: CardPostagensProps) {

  return (

    <div className="border  border-emerald-500/40 bg-slate-900 text-slate-100 
                    flex flex-col rounded-lg overflow-hidden justify-between shadow-lg shadow-emerald-500/10">
     
      <div>
        <div className="flex w-full bg-slate-800 py-2 px-4 items-center gap-4 border-b border-emerald-500/30">
          <img
            src={postagem.usuario?.foto || "https://mirbach-heizungsbau.de/bilder/benutzer.png"}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-emerald-500/40"
            alt={postagem.usuario?.nome} />
            
          <h3 className="text-lg font-bold uppercase text-emerald-400 tracking-wide">
            {postagem.usuario?.nome}
          </h3>
        </div>

        <div className="p-4">
          <h4 className="text-lg font-semibold uppercase text-emerald-300 mb-1"> {postagem.titulo}</h4>
          <p className="text-slate-300 mb-2">{postagem.texto}</p>
          <p className="text-slate-400"><span className="text-emerald-400 font-medium">Tema:</span>{" "}
            {postagem.tema?.descricao}</p>
          <p className="text-slate-400"><span className="text-emerald-400 font-medium">Data:</span>{" "}
            {new Intl.DateTimeFormat("pt-BR", {
              dateStyle: "full",
              timeStyle: "medium",
            }).format(new Date(postagem.data))}</p>
        </div>
      </div>

      <div className="flex">
        <Link
          to={`/editarpostagem/${postagem.id}`}
          className="w-full text-slate-100 bg-emerald-600 
                     hover:bg-emerald-700 flex items-center 
                     justify-center py-2 transition-colors duration-200">
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarpostagem/${postagem.id}`}
          className="w-full text-slate-100 bg-rose-600 hover:bg-rose-700 
                     flex items-center justify-center py-2 transition-colors duration-200">
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardPostagem;

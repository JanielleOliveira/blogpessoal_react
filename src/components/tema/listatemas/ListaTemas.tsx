import CardTema from "../cardtema/CardTema";

// Componente ListaTemas para exibir uma lista de temas
function ListaTemas() {

  // Retorna o JSX do componente e também inclui o componente CardTema
  return (
    <div className="flex justify-center w-full my-4">
      <div className="container flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <CardTema />
          </div>
      </div>
    </div>
  );
}

// Exporta o componente ListaTemas para uso em outras partes da aplicação.
export default ListaTemas; 
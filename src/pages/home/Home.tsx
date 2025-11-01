import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem";

function Home() {
  return (
    <>
      <div className="bg-amber-50 flex justify-center">
        <div className="container grid grid-cols-2 text-yellow-950">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">
                Seja Bem Vindo(a)!
            </h2>
            <p className="text-xl">
                Expresse aqui seus pensamentos e opniões
            </p>

            <div className="flex justify-around gap-4">
               <ModalPostagem />
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://i.pinimg.com/736x/e2/21/0d/e2210d8d6553fd1146e4a11cdeea916a.jpg"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
       <ListaPostagens />
    </>
  );
}

export default Home;

import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem";

function Home() {
  return (
    <>
      <div className="bg-slate-950 flex justify-center text-slate-100">
        <div className="container grid grid-cols-2 text-emerald-500">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">
                Seja Bem Vindo(a)!
            </h2>
            <p className="text-xl text-slate-400 font-medium">
              O console é seu: <span className="text-emerald-400">digite,</span> compartilhe e <span className="text-emerald-400">inspire outros devs</span>.
            </p>

            <div className="flex justify-around gap-4">
               <ModalPostagem />
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://img.freepik.com/premium-photo/elearning-course-illustration-mockup_1254992-470.jpg"
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

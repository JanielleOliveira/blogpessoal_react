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
              <div className="rounded text-yellow-950 
                             border-amber-950 border-solid border-2 py-2 px-4"
              >
                Nova Postagem
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://img.freepik.com/vetores-premium/mulher-negra-trabalhando-no-laptop-freelance-trabalho-remoto-estudo-online_254685-281.jpg"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

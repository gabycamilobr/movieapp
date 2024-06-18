const Contato = () => {
    return (
      <div className="min-h-screen">
        <main className="container mx-auto my-8 p-2">
          <div className="flex items-center mb-8">
            <img src="../../img/setinha.png" className="w-8 mr-10 " alt="" />
            <h2 className="text-2xl font-bold text-red-800">Contato</h2>
          </div>
          <form className="space-y-4 flex colum items-center flex-col">
            <div>
              <label className="block text-lg font-medium">Nome:</label>
              <input
                type="text"
                placeholder="Clique para digitar..."
                className="w-96  px-3 py-2 border border-black rounded-lg"
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Email:</label>
              <input
                type="email"
                placeholder="Clique para digitar..."
                className="w-96 px-3 py-2 border border-black rounded-lg"
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Mensagem:</label>
              <textarea
                placeholder="Clique para digitar..."
                className="w-96 px-3 py-2 border border-black rounded-lg"
                rows="4"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-96 bg-red-800 text-white font-medium py-2 rounded-2xl"
              >
                Enviar
              </button>
            </div>
          </form>
        </main>
      </div>
    );
  };

export default Contato ;
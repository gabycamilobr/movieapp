const Contato = () => {
    return (
      <div>
        <main className="container my-8 p-2">

          <form className=" flex colum items-center flex-col">
            <div>
              <label className="block text-lg font-medium">Nome:</label>
              <input
                type="text"
                placeholder="Clique para digitar..."
                className="w-96 mb-5 px-3 py-2 border border-black rounded-lg"
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Email:</label>
              <input
                type="email"
                placeholder="Clique para digitar..."
                className="w-96 px-3 mb-5 py-2 border border-black rounded-lg"
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Mensagem:</label>
              <textarea
                placeholder="Clique para digitar..."
                className="w-96 px-3 py-2 border mb-5 border-black rounded-lg"
                rows="4"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-96 bg-red-800 mb-12 text-white font-medium py-2 rounded-2xl"
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
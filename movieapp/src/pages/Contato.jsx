import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contato = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function EnviarEmail(e) {
    e.preventDefault();
    if (name === "" || email === "" || mensagem === "") {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    const templateParams = { 
      from_name: name,
      from_email: email, 
      message: mensagem
    };

    emailjs.send("service_7po837x", "template_o1gkod3", templateParams, "cAJMoaqT1JFOGMm7K")
      .then((response) => {
        alert("EMAIL ENVIADO");
        console.log(response.status, response.text);
        setName('');
        setEmail('');
        setMensagem('');
      }, (err) => {
        console.log("ERRO: ", err);
      });
  }

  return (
    <div>
      <main className="container my-8 p-2">
        <form onSubmit={EnviarEmail} className="flex column items-center flex-col">
          <div>
            <label className="block text-lg font-medium" htmlFor="nome">Nome:</label>
            <input 
              onChange={(e) => setName(e.target.value)} 
              type="text"
              placeholder="Clique para digitar..."
              className="w-96 mb-5 px-3 py-2 border border-black rounded-lg"
            />
          </div>
          <div>
            <label className="block text-lg font-medium" htmlFor="email">Email:</label>
            <input 
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Clique para digitar..."
              className="w-96 px-3 mb-5 py-2 border border-black rounded-lg"
            />
          </div>
          <div>
            <label className="block text-lg font-medium" htmlFor="mensagem">Mensagem:</label>
            <textarea 
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Clique para digitar..."
              className="w-96 px-3 py-2 border mb-5 border-black rounded-lg"
              rows="4"
              id="mensagem"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-96 bg-red-800 mb-12 text-white font-medium py-2 rounded-2xl"
            >
              Enviar
            </button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Contato;

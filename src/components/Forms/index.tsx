import { Send } from 'lucide-react';

export default function Forms() {
  return (
    <>
      <form action="">
        <div className="form">
          <input type="text" className="input" placeholder="Seu nome" />
          <div className="phone-email">
            <input type="number" className="input" placeholder="Telefone" />
            <input type="email" className="input" placeholder="Email" />
          </div>
          <input type="text" className="input" placeholder="Assunto" />
          <div className="textarea">
            <label htmlFor="text-area" className="textarea-label">
              Assunto
            </label>
            <textarea className="text-area" />
          </div>

          <button className="cards-btn form-btn">Enviar!</button>
        </div>
      </form>
    </>
  );
}

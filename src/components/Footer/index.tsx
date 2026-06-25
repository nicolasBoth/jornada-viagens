import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './index.css';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <>
      <div className={className}></div>
      <div className="rodape">
        <div className="rodape-container">
          <div className="rodape-secao1">
            <img src="src/assets/Logo-Branco 1.png" alt="" className="logo-rodape" />
            <p>Horário de atendimento: 08h - 20h (Segunda e Sábado)</p>
            <p>Desenvolvido por Alura. Projeto fictício sem fins comerciais</p>
          </div>
          <div className="redes">
            <p>Acesse nossas redes:</p>
            <ul>
              <li>
                <a href="#" className="facebook">
                  <FaFacebook size={24} color="rgb(255, 255, 255)" />
                </a>
              </li>
              <li>
                <a href="#" className="instagram">
                  <FaInstagram size={24} color="rgb(255, 255, 255)" />
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <FaTwitter size={24} color="rgb(255, 255, 255)" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

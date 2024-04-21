import React from 'react';
import './style.scss'
import Banner from "../../assets/gobrax-banner.svg"
import { Link } from 'react-router-dom';
const NotFound: React.FC = () => {
  return (
    <div className="container">
        <div className="container-left">
            <img src={Banner} alt="Banner" width={300} height={300} />
            <h2>404</h2>
        </div>
        <div className="container-right">
            <p>Não encontramos a página que procura.</p>
            <Link to="/">Voltar para Home</Link>
        </div>
      </div>
  );
}

export default NotFound;
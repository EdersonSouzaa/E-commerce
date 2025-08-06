import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

import logo from "../assets/favicon_cart.png"

function Navegacao({onProdutosClick, onSobreClick, onContatoClick}) {
  
  return (
    <div className="navbar">
      <div className="logo">
        <p className="texto_logo">
          <span className="fast">FAST</span>STORE
        </p>
      </div>

      <div className="menu">
        <nav>
          <ul>
            <li><Link to="/" className="texto_home">Home</Link></li>
            <li onClick={onProdutosClick} style={{ cursor: 'pointer' }} className="produtos">Produtos</li>
            <li onClick={onSobreClick} style={{ cursor: 'pointer' }}>Sobre</li>
            <li onClick={onContatoClick} style={{ cursor: 'pointer' }}>Contato</li>
            <li className="conta">Conta</li>
          </ul>
        </nav>
      </div>

      <div className="input_barra">
        <input
          type="text"
          placeholder="  Digite para pesquisar"
          className="texto_input"
        />
      </div>

      <div className="container_pesquisar">
        <FaSearch size={23} className="icone_pesquisar" />
      </div>

      <div className="icone_carrinho">
        <Link to="/cart">
          <FaShoppingCart
            size={24}
            style={{ cursor: "pointer", color: "#FFF" }}
          />
        </Link>
      </div>

      <div className="icone_conta">
        <MdAccountCircle size={28} />
      </div>
    </div>
  );
}

export default Navegacao;

import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

function Navegacao({ onProdutosClick, onSobreClick, onContatoClick }) {
  const { itemCount } = useCart();

  return (
    <header className="navbar">
      <div className="section-container nav-content">
        <Link to="/" className="logo">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="texto_logo"
          >
            <span className="fast">FAST</span>STORE
          </motion.p>
        </Link>

        <nav className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li onClick={onProdutosClick}>Produtos</li>
            <li onClick={onSobreClick}>Sobre</li>
            <li onClick={onContatoClick}>Contato</li>
          </ul>
        </nav>

        <div className="nav-actions">
          <div className="search-box">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="search-input"
            />
            <FaSearch className="search-icon" />
          </div>

          <div className="action-icons">
            <Link to="/cart" className="icon-link">
              <FaShoppingCart size={20} />
              <span className="cart-badge">{itemCount}</span>
            </Link>
            <button className="icon-link">
              <FaUserCircle size={22} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navegacao;

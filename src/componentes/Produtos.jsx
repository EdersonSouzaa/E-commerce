import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { useCart } from "../context/CartContext";

// Se este arquivo for o que renderiza a GRID de produtos:
function Produtos({ listaDeProdutos = [] }) {
  const { addToCart } = useCart();

  return (
    <div className="product-grid">
      {listaDeProdutos.map((produto) => (
        <motion.div
          key={produto.id}
          whileHover={{ y: -8 }}
          className="product-card-premium glass-card"
        >
          <div className="product-image-box">
            <img
              src={produto.imagem}
              alt={produto.nome}
              onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
            />
            <span className="category-tag">{produto.categoria}</span>
          </div>

          <div className="product-details">
            <h3 className="product-name">{produto.nome}</h3>

            <div className="product-footer">
              <div className="price-container">
                <span className="currency">R$</span>
                <span className="amount">
                  {Number(produto.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>

              <button
                className="btn-add-neon"
                onClick={() => addToCart(produto)}
              >
                <FiPlus size={20} />
                <span>Adicionar</span>
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// O NOME AQUI DEVE SER IGUAL AO NOME DA FUNÇÃO ACIMA
export default Produtos;
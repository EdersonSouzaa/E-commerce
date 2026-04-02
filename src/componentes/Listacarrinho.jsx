import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import { FiShoppingBag, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Importe sua imagem de erro/vazio
import emptyCartImage from "../assets/empty_state.png";

function Listacarrinho() {
  const navigate = useNavigate();
  const { cartItems, increaseQty, decreaseQty, removeFromCart, total } = useCart();

  // Lógica de Frete: Grátis acima de R$ 999
  const frete = total > 999 ? 0 : 29.9;

  const handleCheckoutNavigation = () => {
    if (cartItems.length === 0) return;
    // Em vez de apenas mostrar "Sucesso", navegamos para a tela de formulários
    navigate('/checkout');
  };

  return (
    <section className="cart-page">
      <div className="section-container">
        {/* Header */}
        <div className="cart-header">
          <button className="cart-back-btn" onClick={() => navigate(-1)}>
            <FiArrowLeft size={20} />
            Voltar
          </button>
          <h1 className="cart-title">
            <FiShoppingBag size={28} />
            Meu Carrinho
            <span className="cart-count">({cartItems.length})</span>
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="cart-empty"
          >
            <img src={emptyCartImage} alt="Carrinho Vazio" style={{ width: 180 }} />
            <h2>Seu carrinho está vazio</h2>
            <p>Adicione produtos para continuar comprando.</p>
            <button className="btn-primary" onClick={() => navigate('/')} style={{ marginTop: '20px' }}>
              Ir para a Loja
            </button>
          </motion.div>
        ) : (
          <div className="cart-layout">
            {/* Lista de Itens */}
            <div className="cart-items-list">
              <AnimatePresence mode="popLayout">
                {cartItems.map((produto) => (
                  <motion.div
                    key={produto.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="cart-item-card glass-card"
                  >
                    <div className="cart-item-image">
                      <img
                        src={produto.imagem}
                        alt={produto.nome}
                        onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
                      />
                    </div>

                    <div className="cart-item-info">
                      <span className="cart-item-category">{produto.categoria || 'Eletrônico'}</span>
                      <h3 className="cart-item-name">{produto.nome}</h3>
                      <span className="cart-item-price">
                        R$ {Number(produto.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>

                    <div className="cart-item-controls">
                      <button className="cart-qty-btn" onClick={() => decreaseQty(produto.id)}>
                        <AiFillMinusCircle size={24} />
                      </button>
                      <span className="cart-qty-display">{produto.quantidade}</span>
                      <button className="cart-qty-btn" onClick={() => increaseQty(produto.id)}>
                        <IoMdAddCircle size={24} />
                      </button>
                    </div>

                    <button className="cart-remove-btn" onClick={() => removeFromCart(produto.id)}>
                      <TiDelete size={28} />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Resumo Financeiro */}
            <aside className="cart-summary glass-card">
              <h2 className="cart-summary-title">Resumo</h2>
              <div className="cart-summary-rows">
                <div className="cart-summary-row">
                  <span>Subtotal</span>
                  <span>R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="cart-summary-row">
                  <span>Frete</span>
                  <span>{frete === 0 ? 'Grátis' : `R$ ${frete.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</span>
                </div>
                <div className="cart-summary-divider" />
                <div className="cart-summary-row cart-summary-total">
                  <span>Total</span>
                  <span className="text-gradient">
                    R$ {(total + frete).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
              <button
                className="btn-primary"
                style={{ width: '100%', marginTop: '20px' }}
                onClick={handleCheckoutNavigation}
              >
                Finalizar Compra
              </button>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}

export default Listacarrinho;
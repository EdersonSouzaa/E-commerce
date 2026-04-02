import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { FiCreditCard, FiMapPin, FiUser, FiCheckCircle, FiArrowLeft } from "react-icons/fi";

function Checkout() {
    const navigate = useNavigate();
    const { cartItems, total, clearCart, updateQuantity } = useCart(); // Adicionado updateQuantity do contexto
    const [isFinished, setIsFinished] = useState(false);

    const frete = total > 999 ? 0 : 29.9;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsFinished(true);
        
        setTimeout(() => {
            clearCart();
            navigate("/");
        }, 4000);
    };

    // 1. TELA DE SUCESSO CORRIGIDA (SEM FUNDO E CENTRALIZADA)
    if (isFinished) {
        return (
            <section className="checkout-success-full-screen">
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 1 }}
                    className="checkout-success-content"
                >
                    <div className="success-icon-wrapper">
                        <FiCheckCircle size={100} color="#00ffcc" />
                        <div className="icon-glow"></div>
                    </div>
                    <h1 className="success-title">Pedido Realizado!</h1>
                    <p className="success-text">Sua compra foi processada com sucesso.</p>
                    <p className="success-muted">Redirecionando para a home...</p>
                </motion.div>
            </section>
        );
    }

    return (
        <section className="section-container checkout-page">
            <button className="cart-back-btn" onClick={() => navigate(-1)}>
                <FiArrowLeft /> Voltar ao Carrinho
            </button>

            <div className="checkout-main-flow">
                <form id="checkout-form" onSubmit={handleSubmit} className="checkout-full-form">
                    {/* Dados Pessoais */}
                    <div className="glass-card checkout-section">
                        <h2 className="checkout-section-title"><FiUser /> Dados Pessoais</h2>
                        <div className="input-row">
                            <input type="text" placeholder="Nome Completo" required className="checkout-input" />
                            <input type="email" placeholder="E-mail" required className="checkout-input" />
                        </div>
                    </div>

                    {/* Endereço */}
                    <div className="glass-card checkout-section">
                        <h2 className="checkout-section-title"><FiMapPin /> Endereço de Entrega</h2>
                        <div className="address-grid">
                            <input type="text" placeholder="CEP" required className="checkout-input" />
                            <input type="text" placeholder="Cidade" required className="checkout-input" />
                            <input type="text" placeholder="Rua" required className="checkout-input full-width" />
                            <input type="text" placeholder="Número" required className="checkout-input" />
                            <input type="text" placeholder="Bairro" required className="checkout-input" />
                        </div>
                    </div>

                    {/* Pagamento */}
                    <div className="glass-card checkout-section">
                        <h2 className="checkout-section-title"><FiCreditCard /> Pagamento</h2>
                        <div className="payment-options">
                            <select className="checkout-input">
                                <option>Cartão de Crédito</option>
                                <option>Pix</option>
                                <option>Boleto</option>
                            </select>
                            <input type="text" placeholder="0000 0000 0000 0000" className="checkout-input full-width" />
                        </div>
                    </div>
                </form>

                {/* Resumo do Pedido com Botões Alinhados */}
                <aside className="checkout-summary-bottom glass-card">
                    <div className="summary-header">
                        <h2>Resumo do Pedido</h2>
                    </div>

                    <div className="summary-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="summary-item-row">
                                <div className="item-info">
                                    <span>{item.nome}</span>
                                </div>
                                
                                {/* 2. BOTÕES DE QUANTIDADE CENTRALIZADOS */}
                                <div className="item-quantity-controls">
                                    <button type="button" onClick={() => updateQuantity(item.id, item.quantidade - 1)}>-</button>
                                    <span>{item.quantidade}</span>
                                    <button type="button" onClick={() => updateQuantity(item.id, item.quantidade + 1)}>+</button>
                                </div>

                                <span className="item-price">R$ {(item.preco * item.quantidade).toLocaleString('pt-BR')}</span>
                            </div>
                        ))}
                    </div>

                    <div className="summary-totals">
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>R$ {total.toLocaleString('pt-BR')}</span>
                        </div>
                        <div className="summary-row">
                            <span>Frete</span>
                            <span className="free-shipping">{frete === 0 ? 'Grátis' : `R$ ${frete.toFixed(2)}`}</span>
                        </div>
                        <div className="summary-divider" />
                        <div className="summary-row total-row">
                            <span>Total</span>
                            <span className="total-price">R$ {(total + frete).toLocaleString('pt-BR')}</span>
                        </div>
                    </div>

                    <button type="submit" form="checkout-form" className="btn-confirm-payment">
                        Confirmar Pagamento
                    </button>
                </aside>
            </div>
        </section>
    );
}

export default Checkout;
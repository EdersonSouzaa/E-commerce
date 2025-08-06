import { useState } from "react";
import iphone_14 from "../assets/iphone_14.png";
import ipad from "../assets/ipad.png";
import emptyCartImage from "../assets/empty_state.png";
import { IoMdAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";

function Listacarrinho({ mostrarCarrinho, setMostrarCarrinho }) {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: "Apple Iphone 14 pro max",
      preco: 4612.0,
      quantidade: 1,
      imagem: iphone_14,
    },
    {
      id: 2,
      nome: "Apple Ipad 9 2021",
      preco: 2673.0,
      quantidade: 1,
      imagem: ipad,
    },
  ]);

  const aumentar = (id) => {
    setProdutos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  const diminuir = (id) => {
    setProdutos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantidade: Math.max(0, item.quantidade - 1) } : item
      )
    );
  };

  const removerProduto = (id) => {
    setProdutos((prev) => prev.filter((item) => item.id !== id));
  };

  const total = produtos.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  return (
    <AnimatePresence>
      <motion.div
        className="container_carrinho_produtos"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <TiDelete
          className="icone_carrinho_compras"
          size={45}
          onClick={() => window.history.back()}
          style={{ cursor: "pointer", color: "#ffffff" }}
        />

        <h1>Meu Carrinho</h1>

        {produtos.length === 0 ? (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <img src={emptyCartImage} alt="Carrinho vazio" style={{ width: "230px", height: "230px", marginBottom: "16px" }} />
            <p style={{ fontSize: "18px", color: "#FFF" }}>Seu carrinho está vazio</p>
            <p style={{ fontSize: "18px", color: "#FFF" }}>Adicione produtos para continuar</p>
          </div>
        ) : (
          <>
            {produtos.map((produto) => (
              <div key={produto.id} className={`carrinho_produto${produto.id}`}>
                <img src={produto.imagem} alt={produto.nome} />
                <p>{produto.nome}</p>
                <p
                  className={`subtexto_cart_prod${produto.id}`}
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  R$ {produto.preco.toFixed(2)}
                  <TiDelete
                    className="delete_prod_cart1"
                    size={28}
                    color="red"
                    style={{ cursor: "pointer" }}
                    onClick={() => removerProduto(produto.id)}
                  />
                </p>
                <motion.div whileTap={{ scale: 1.05 }} transition={{ duration: 0.15 }} onClick={() => aumentar(produto.id)} style={{ cursor: "pointer" }}>
                  <IoMdAddCircle size={30} className="icone_plus_carrinho_prod2" />
                </motion.div>
                <p className={`texto_preco_carrinho_prod${produto.id}`}>{produto.quantidade}</p>
                <motion.div whileTap={{ scale: 0.95 }} transition={{ duration: 0.15 }} onClick={() => diminuir(produto.id)} style={{ cursor: "pointer" }}>
                  <AiFillMinusCircle size={30} className="icone_minus_carrinho_prod2" />
                </motion.div>
              </div>
            ))}
            <div className="texto_total_carrinho">
              <p>Total:</p>
              <p className="subtexto_total_carrinho">R$ {total.toFixed(2)}</p>
            </div>
            <div className="botao_checkout_carrinho">
              <button>Prosseguir</button>
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default Listacarrinho;

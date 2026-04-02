import { forwardRef } from "react";
import { motion } from "framer-motion";
import { CiBookmarkPlus } from "react-icons/ci";
import { useCart } from '../context/CartContext';

// Importação dos assets
import iphone_14 from "../assets/iphone_14.png";
import ipad from "../assets/ipad.png";
import applewatch from "../assets/relogio.png";
import fones_samsung from "../assets/fones_samsung.png";
import asus from "../assets/asus.png";
import verde_notebook from "../assets/verde_notebook.png";
import galaxy_watch from "../assets/galaxy_watch.png";
import camera from "../assets/camera.png";

const products = [
  { id: 1, nome: "iPhone 14 Pro Max", categoria: "Smartphones", preco: 3760.00, imagem: iphone_14, description: "128GB - Deep Purple" },
  { id: 2, nome: "iPad 9 2021", categoria: "Tablets", preco: 2899.00, imagem: ipad, description: "64GB - Space Gray" },
  { id: 3, nome: "Apple Watch Series 9", categoria: "Wearables", preco: 570.00, imagem: applewatch, description: "Starlight Aluminium" },
  { id: 4, nome: "Pocket Cinema 6K", categoria: "Cameras", preco: 10200.00, imagem: camera, description: "Professional 6K Video" },
  { id: 5, nome: "Samsung Buds Pro", categoria: "Audio", preco: 699.00, imagem: fones_samsung, description: "Active Noise Cancelling" },
  { id: 6, nome: "Asus ROG Pro", categoria: "Laptops", preco: 5999.00, imagem: asus, description: "Gaming Monster" },
  { id: 7, nome: "Lenovo G4 Ultra", categoria: "Laptops", preco: 4599.00, imagem: verde_notebook, description: "OLED Display" },
  { id: 8, nome: "Galaxy Watch 6", categoria: "Wearables", preco: 299.00, imagem: galaxy_watch, description: "Health & Fitness" },
];

const Itens = forwardRef((props, ref) => {
  const { addToCart } = useCart();

  return (
    <section className="section-container" ref={ref} style={{ paddingBottom: '4rem' }}>
      <div className="product-grid">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="glass-card product-card"
          >
            <div className="product-image-container">
              {/* Lendo .imagem corretamente */}
              <img src={product.imagem} alt={product.nome} className="product-image" />
            </div>

            <div className="product-info">
              <span className="product-category">{product.categoria}</span>
              <h3 className="product-name">{product.nome}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{product.description}</p>
              {/* Exibição formatada do preço */}
              <span className="product-price">
                {product.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>

            <div className="product-actions">
              <button
                className="btn-add-cart"
                onClick={() => addToCart(product)}
              >
                Adicionar
              </button>
              <button className="btn-wishlist">
                <CiBookmarkPlus size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

export default Itens;
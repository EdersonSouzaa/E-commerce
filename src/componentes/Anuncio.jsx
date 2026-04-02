import { motion } from "framer-motion";
import macbook_air from "../assets/macbook_air.png";

function Anuncio() {
  return (
    <section className="hero">
      <div className="section-container hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hero-text"
        >
          <span className="hero-badge">Novo Lançamento</span>
          <h1 className="heading-xl">MacBook Air</h1>
          <p className="subtext_publi" style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '500px', textAlign: 'left', bottom: '0' }}>
            A performance Apple agora no seu ritmo. Mais fino, mais leve e infinitamente mais potente com o chip M2.
          </p>
          <div className="hero-actions" style={{ display: 'flex', gap: '1.5rem' }}>
            <button className="btn-primary">Compre agora</button>
            <button className="btn-secondary">Saiba mais</button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="hero-image-container"
        >
          <div className="hero-glow"></div>
          <img src={macbook_air} className="hero-image" alt="MacBook Air" />
        </motion.div>
      </div>
    </section>
  );
}

export default Anuncio;
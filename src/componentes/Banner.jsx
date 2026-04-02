import { motion } from "framer-motion";
import iphone_mockup from "../assets/iphone_mockup.png";
import macbook_mockup from "../assets/macbook_mockup.png";
import iphone15_mockup from "../assets/iphone15_mockup.png";
import apple_watch from "../assets/apple_watch.png";

function Banner() {
  const images = [iphone_mockup, macbook_mockup, iphone15_mockup, apple_watch];

  return (
    <section className="section-container banner-section">
      <div className="glass-card banner-grid" style={{ padding: '4rem', overflow: 'hidden' }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="banner-content"
        >
          <span className="hero-badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>Oferta Limitada</span>
          <h2 className="banner-title">Tecnologia de ponta, <span className="text-gradient">ofertas que surpreendem.</span></h2>
          <p className="footer-text">Elevamos sua experiência digital com dispositivos selecionados. Qualidade premium garantida com as melhores condições do mercado.</p>
          <button className="btn-primary" style={{ width: 'fit-content', marginTop: '1rem' }}>
            Explorar Ofertas
          </button>
        </motion.div>

        <div className="banner-images">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt="Promo"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="banner-image-item"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banner;
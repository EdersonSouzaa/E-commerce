import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdWatch } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { GiGamepad } from "react-icons/gi";
import { motion } from "framer-motion";

function Categorias() {
  const categories = [
    { id: 1, icon: <IoPhonePortraitOutline size={32} />, label: "Celulares" },
    { id: 2, icon: <MdWatch size={32} />, label: "Relógios" },
    { id: 3, icon: <GrPersonalComputer size={32} />, label: "Computadores" },
    { id: 4, icon: <FaCamera size={32} />, label: "Câmeras" },
    { id: 5, icon: <GiGamepad size={32} />, label: "Gaming" },
  ];

  return (
    <section className="section-container categories-section">
      {/* Cabeçalho Centralizado */}
      <div className="section-header-center">
        <h2 className="section-title">Pesquisar por Categoria</h2>
        <div className="title-underline"></div>
      </div>

      {/* Grid Centralizado com Flexbox */}
      <div className="categories-grid-centered">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              y: -10,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card category-card-modern"
          >
            <div className="category-icon-wrapper">
              {cat.icon}
            </div>
            <span className="category-label">{cat.label}</span>

            {/* Brilho interno sutil no hover via CSS */}
            <div className="card-glow"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Categorias;
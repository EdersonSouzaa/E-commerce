import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';

import { CartProvider } from './context/CartContext';
import Navegacao from './componentes/Navegacao';
import Anuncio from './componentes/Anuncio';
import Categorias from './componentes/Categorias';
import Produtos from './componentes/Produtos'; // Certifique-se que o export default existe aqui!
import Itens from './componentes/Itens';
import Banner from './componentes/Banner';
import Ofertastexto from './componentes/Ofertastexto';
import Footer from './componentes/Footer';
import Listacarrinho from './componentes/Listacarrinho';
import Checkout from './componentes/Checkout';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();
  const itensRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToItens = () => {
    itensRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Layout Principal (Home)
  const MainLayout = ({ showItens = true }) => (
    <div className="app">
      <Navegacao
        onProdutosClick={scrollToItens}
        onSobreClick={scrollToFooter}
        onContatoClick={scrollToFooter}
      />
      <Anuncio />
      <Categorias />

      {/* Seção de Filtros (Lançamento, etc) */}
      <Produtos />

      {/* Seção da Grid de Itens Geral */}
      {showItens && (
        <div ref={itensRef}>
          <Itens />
        </div>
      )}

      <Banner />
      <Ofertastexto />

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );

  return (
    <CartProvider>
      <AnimatePresence mode="wait">
        {/* O segredo para não ficar branco é garantir que as rotas existam */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><MainLayout /></PageWrapper>} />
          <Route path="/produtos" element={<PageWrapper><MainLayout /></PageWrapper>} />
          <Route path="/sobre" element={<PageWrapper><MainLayout showItens={false} /></PageWrapper>} />
          <Route path="/contato" element={<PageWrapper><MainLayout showItens={false} /></PageWrapper>} />
          <Route path="/cart" element={<PageWrapper><Listacarrinho /></PageWrapper>} />
          <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </CartProvider>
  );
}

export default App;
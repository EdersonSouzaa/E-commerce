import './App.css';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Navegacao from './componentes/Navegacao';
import Anuncio from './componentes/Anuncio';
import Categorias from './componentes/Categorias';
import Produtos from './componentes/Produtos';
import Itens from './componentes/Itens';
import Banner from './componentes/Banner';
import Ofertastexto from './componentes/Ofertastexto';
import Footer from './componentes/Footer';
import Listacarrinho from './componentes/Listacarrinho';

import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';

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

  const PageWrapper = ({ children }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Navegacao
                  onProdutosClick={scrollToItens}
                  onSobreClick={scrollToFooter}
                  onContatoClick={scrollToFooter}
                />
                <Anuncio />
                <Categorias />
                <Produtos />
                <div ref={itensRef}>
                  <Itens />
                </div>
                <Banner />
                <Ofertastexto />
                <div ref={footerRef}>
                  <Footer />
                </div>
              </PageWrapper>
            }
          />

          <Route
            path="/produtos"
            element={
              <PageWrapper>
                <Navegacao
                  onProdutosClick={scrollToItens}
                  onSobreClick={scrollToFooter}
                  onContatoClick={scrollToFooter}
                />
                <Anuncio />
                <Categorias />
                <Produtos />
                <div ref={itensRef}>
                  <Itens />
                </div>
                <Banner />
                <Ofertastexto />
                <Listacarrinho />
                <div ref={footerRef}>
                  <Footer />
                </div>
              </PageWrapper>
            }
          />

          <Route
            path="/sobre"
            element={
              <PageWrapper>
                <Navegacao
                  onProdutosClick={scrollToItens}
                  onSobreClick={scrollToFooter}
                  onContatoClick={scrollToFooter}
                />
                <Anuncio />
                <Categorias />
                <Produtos />
                <Banner />
                <Ofertastexto />
                <div ref={footerRef}>
                  <Footer />
                </div>
              </PageWrapper>
            }
          />

          <Route
            path="/contato"
            element={
              <PageWrapper>
                <Navegacao
                  onProdutosClick={scrollToItens}
                  onSobreClick={scrollToFooter}
                  onContatoClick={scrollToFooter}
                />
                <Anuncio />
                <Categorias />
                <Produtos />
                <Banner />
                <Ofertastexto />
                <div ref={footerRef}>
                  <Footer />
                </div>
              </PageWrapper>
            }
          />

          <Route
            path="/cart"
            element={
              <PageWrapper>
                <Navegacao
                  onProdutosClick={scrollToItens}
                  onSobreClick={scrollToFooter}
                  onContatoClick={scrollToFooter}
                />
                <Anuncio />
                <Categorias />
                <Produtos />
                <Banner />
                <Ofertastexto />
                <Listacarrinho />
                <div ref={footerRef}>
                  <Footer />
                </div>
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

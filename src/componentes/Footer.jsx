import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="fast">FAST</span>STORE
            </div>
            <p className="footer-text">
              Oferecemos a melhor experiência em eletrônicos premium com entrega expressa para todo o Brasil. Qualidade e confiança que você merece.
            </p>
            <div className="social-links" style={{ display: 'flex', gap: '1rem' }}>
              <FaInstagram size={20} className="icon-link" />
              <FaTwitter size={20} className="icon-link" />
              <FaFacebook size={20} className="icon-link" />
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Loja</h4>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Todos os Produtos</a></li>
              <li><a href="/" className="footer-link">Lançamentos</a></li>
              <li><a href="/" className="footer-link">Mais Vendidos</a></li>
              <li><a href="/" className="footer-link">Ofertas</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Suporte</h4>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Sua Conta</a></li>
              <li><a href="/" className="footer-link">Rastrear Pedido</a></li>
              <li><a href="/" className="footer-link">Termos de Uso</a></li>
              <li><a href="/" className="footer-link">Privacidade</a></li>
            </ul>
          </div>

          <div className="footer-brand">
            <h4 className="footer-heading">Baixe nosso App</h4>
            <div className="footer-apps">
              <button className="app-btn">
                <FaApple size={24} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.6rem' }}>Baixar na</div>
                  <div style={{ fontWeight: 600 }}>App Store</div>
                </div>
              </button>
              <button className="app-btn">
                <IoLogoGooglePlaystore size={24} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.6rem' }}>Disponível no</div>
                  <div style={{ fontWeight: 600 }}>Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 FASTSTORE. Todos os direitos reservados.</p>
          <p>Desenvolvido por Éderson Façanha</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
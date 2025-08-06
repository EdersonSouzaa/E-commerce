import { forwardRef } from "react";

import iphone_14 from "../assets/iphone_14.png";
import ipad from "../assets/ipad.png";
import applewatch from "../assets/relogio.png";
import fones_samsung from "../assets/fones_samsung.png";
import asus from "../assets/asus.png";
import verde_notebook from "../assets/verde_notebook.png";
import galaxy_watch from "../assets/galaxy_watch.png";
import camera from "../assets/camera.png";

import { CiBookmarkPlus } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const Itens = forwardRef((props, ref) => {
  return (
    <div className="container_itens" ref={ref}>
      <div className="produto1">
        <div className="container_like_prod1">
          <CiBookmarkPlus size={30} className="icone_like_prod1" />
        </div>
        <div className="container_cart_prod1">
          <FiShoppingCart size={30} className="icone_cart_prod1" />
        </div>
        <img src={iphone_14} alt="" />
        <p>Apple Iphone 14 pro max</p>
        <p className="texto_iphone_roxo">
          <span className="text_bold_iphone">128GB</span> Cor Roxa
        </p>
        <div className="botao_iphone_roxo">
          <button>Ver detalhes</button>
        </div>
      </div>

      <div className="produto2">
        <div className="container_like_prod1">
          <CiBookmarkPlus size={30} className="icone_like_prod1" />
        </div>
        <div className="container_cart_prod2">
          <FiShoppingCart size={30} className="icone_cart_prod2" />
        </div>
        <img src={ipad} alt="" />
        <p>Apple iPad 9 2021</p>
        <p className="texto_ipad_silver">
          <span className="bold_ipad">64GB</span> Cor Roxa
        </p>
        <div className="botao_iphone_roxo">
          <button>Ver detalhes</button>
        </div>
      </div>

      <div className="produto3">
        <div className="container_like_prod3">
          <CiBookmarkPlus size={30} className="icone_like_prod3" />
        </div>
        <div className="container_cart_prod3">
          <FiShoppingCart size={30} className="icone_cart_prod3" />
        </div>
        <img src={applewatch} alt="" />
        <p>Apple watch series 9</p>
        <p className="texto_applewatch_aluminium">Starlight Aluminium</p>
        <div className="botao_relogio_cinza">
          <button>Ver detalhes</button>
        </div>
      </div>

      <div className="produto4">
        <div className="container_like_prod4">
          <CiBookmarkPlus size={30} className="icone_like_prod4" />
        </div>
        <div className="container_cart_prod4">
          <FiShoppingCart size={30} className="icone_cart_prod4" />
        </div>
        <img src={camera} alt="" />
        <p>Blackmagic pocket cinema</p>
        <p className="texto_camera_preta">Câmera 6K</p>
        <div className="botao_camera_preta">
          <button>Ver detalhes</button>
        </div>
      </div>

      <div className="produto5">
        <div className="container_like_prod4">
          <CiBookmarkPlus size={30} className="icone_like_prod4" />
        </div>
        <div className="container_cart_prod4">
          <FiShoppingCart size={30} className="icone_cart_prod4" />
        </div>
        <img src={fones_samsung} alt="" />
        <p>Samsung G5 pro</p>
        <p className="texto_fone_cinza">Cor Cinza</p>
        <div className="botao_fone_cinza">
          <button>Ver detalhes</button>
        </div>
      </div>

      <div className="produto6">
        <div className="container_like_prod6">
          <CiBookmarkPlus size={30} className="icone_like_prod6" />
        </div>
        <img src={asus} alt="" />
        <p>Asus rog pro</p>
        <p className="texto_notebook_preto">Cor preta</p>
        <div className="botao_notebook_red">
          <button>Ver detalhes</button>
        </div>
        <div className="container_cart_prod6">
          <FiShoppingCart size={30} className="icone_cart_prod6" />
        </div>
      </div>

      <div className="produto7">
        <div className="container_like_prod7">
          <CiBookmarkPlus size={30} className="icone_like_prod7" />
        </div>
        <img src={verde_notebook} alt="" />
        <p>Lenovo G4 ultra</p>
        <p className="texto_notebook_verde">Cor Cinza</p>
        <div className="botao_notebook_verde">
          <button>Ver detalhes</button>
        </div>
        <div className="container_cart_prod7">
          <FiShoppingCart size={30} className="icone_cart_prod7" />
        </div>
      </div>

      <div className="produto8">
        <div className="container_like_prod8">
          <CiBookmarkPlus size={30} className="icone_like_prod8" />
        </div>
        <img src={galaxy_watch} alt="" />
        <p>Samsung Galaxy watch 6</p>
        <p className="texto_relogio_verde">Cor Cinza</p>
        <div className="botao_relogio_verde">
          <button>Ver detalhes</button>
        </div>
        <div className="container_cart_prod8">
          <FiShoppingCart size={30} className="icone_cart_prod8" />
        </div>
      </div>
    </div>
  );
});

export default Itens;

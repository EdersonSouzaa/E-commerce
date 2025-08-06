import iphone_mockup from "../assets/iphone_mockup.png"

import macbook_mockup from "../assets/macbook_mockup.png"

import iphone15_mockup from "../assets/iphone15_mockup.png"

import apple_watch from "../assets/apple_watch.png"



function Banner(){

    return(

        <div className="container_banner">

            <img src={iphone_mockup} alt="" className="mockup_iphone"/>

            <img src={macbook_mockup} alt="" className="mockup_macbook"/>

            <img src={iphone15_mockup} alt="" className="iphone2_mockup"/>
            
            <img src={apple_watch} alt="" className="watch_mockup"/>

            <div className="texto_banner">

                <p>Tecnologia de ponta, ofertas que surpreendem</p>

                <p className="subtexto_banner">Ofertas especiais em eletrônicos de última geração. Garanta já o seu!</p>

                <button className="botao_banner">Saiba mais</button>

            </div>

           
        </div>
    )
}

export default Banner
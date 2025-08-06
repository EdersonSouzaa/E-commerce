
import { IoLogoGooglePlaystore } from "react-icons/io5";

import { FaApple } from "react-icons/fa";


function Footer(){

    return(
        <div className="container_footer">


            <p>FASTSTORE</p>


            <p className="subtexto_footer">Baixe o nosso aplicativo seja na Apple Store como na Google Play</p>



            <div className="container_googleplay">

                <p>Google Play</p>
                <IoLogoGooglePlaystore className="icone_google" size={38}/>

            </div>

            <div className="container_applestore">

                <p>Apple Store</p>
                <FaApple className="icone_apple" size={38}/>


            </div>

            <div className="objetivo_footer">
                <p>Nosso objetivo é proporcionar ao cliente as melhores qualidades e entregas do produto</p>

                <p className="subtexto_direitos">CopyRight 2025 - Éderson Façanha - Todos os direitos reservados</p>
            </div>

        </div>


    )
}

export default Footer
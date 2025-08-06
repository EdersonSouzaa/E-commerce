import macbook_air from "../assets/macbook_air.png"

function Anuncio(){

    return(

        <div className="container_anuncio">

            <p className="text_publi">MacBook air</p>

            <p  className="subtext_publi"> Performance Apple no seu ritmo com o MacBook Air.</p>

            <img src={macbook_air} className="imagem_macbook_publi" alt="" />

            <div className="botao_publi">
                <button>Compre agora</button>
            </div>
        </div>
    )
}

export default Anuncio;
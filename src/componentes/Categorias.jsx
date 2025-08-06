import { BsArrowRightSquare } from "react-icons/bs";

import { BsArrowLeftSquare } from "react-icons/bs";

import { IoPhonePortraitOutline } from "react-icons/io5";

import { MdWatch } from "react-icons/md";

import { FaCamera } from "react-icons/fa";

import { GrPersonalComputer } from "react-icons/gr";

import { IoLogoGameControllerB } from "react-icons/io";





function Categorias(){

    return(

        <div className="container_categoria">

            <p className="filtragem_categorias">Pesquisar por Categoria</p>

          
            <div className="itens_categorias">

                <div className="container_celular">

                <IoPhonePortraitOutline size={70} className="imagem_celular_categoria"/>

                <p className="texto_celular">Celulares</p>

                </div>


                <div className="container_relogio">

                    
                    <MdWatch size={70} classname="imagem_relogio_categoria" />

                    <p className="texto_relogio">Relôgios</p>
                    

                </div>

                
                <div className="container_computador">

                    
                    <GrPersonalComputer size={80} classname="imagem_relogio_categoria" />

                    <p className="texto_computador">Computador</p>


                </div>

                
                
                <div className="container_camera">

                    
                    <FaCamera  size={60} classname="imagem_camera_categoria" />

                    <p className="texto_camera">Câmera</p>


                </div>

                 <div className="container_camera">

                    
                    <IoLogoGameControllerB  size={60} classname="imagem_camera_categoria" />

                    <p className="texto_camera">Gaming</p>


                </div>




                

             

             

            

            </div>
        </div>
    )
}

export default Categorias
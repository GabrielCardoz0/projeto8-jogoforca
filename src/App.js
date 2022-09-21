import React from "react";

import image0 from "./assets/forca0.png"
import image1 from "./assets/forca1.png"
import image2 from "./assets/forca2.png"
import image3 from "./assets/forca3.png"
import image4 from "./assets/forca4.png"
import image5 from "./assets/forca5.png"
import image6 from "./assets/forca6.png"

const letras=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

export default function App() {

    const [imagemForca, setImagemForca] = React.useState(image0)

    function Tecla(letra){
        return(
            <div className="testekey">{letra}</div>
        )
    }

    return (
        <>
            <div class="top-part">
                <img src={imagemForca} alt="" />
                <div className="choose-word">Escolher palavras</div>
            </div>

            <div class="bottom-part">

                <div className="keyboard">
                    {letras.map(Tecla)}
                </div>

                <div className="kick">
                    <input placeholder="Já sei, a palavra é:"></input>
                    <div className="kick-word">Chutar</div>
                </div>

            </div>
        </>
    )
}
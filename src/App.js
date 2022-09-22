import React from "react";

import image0 from "./assets/forca0.png"
import image1 from "./assets/forca1.png"
import image2 from "./assets/forca2.png"
import image3 from "./assets/forca3.png"
import image4 from "./assets/forca4.png"
import image5 from "./assets/forca5.png"
import image6 from "./assets/forca6.png"

import palavras from "./palavras";

const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];





export default function App() {

    const [imagemForca, setImagemForca] = React.useState(image0)

    const [palavraSorteada, setPalavraSorteada] = React.useState()

    const gamesWord = [...palavras]

    const [botaoChooseWord, setBotaoChooseWord] = React.useState(<div className="choose-word" onClick={EscolherPalavra}>Escolher palavra</div>)

    gamesWord.sort(() => Math.random() - 0.5)


    function EscolherPalavra(){
        setPalavraSorteada(gamesWord[0])
        setBotaoChooseWord(<div className="choose-word gray">Escolher palavra</div>)
    }










    return (
        <>
            <div className="top-part">
                <img src={imagemForca} alt="" />


                <div className="right-side">

                    {botaoChooseWord}

                    <div className="palavraAleatória">{palavraSorteada}</div>

                </div>
            </div>





















            <div className="bottom-part">

                <div className="keyboard">
                    {alfabeto.map((l) => <div className="testekey">{l}</div>)}
                </div>

                <div className="kick">
                    <input placeholder="Já sei, a palavra é:"></input>
                    <div className="kick-word">Chutar</div>
                </div>

            </div>
        </>
    )
}
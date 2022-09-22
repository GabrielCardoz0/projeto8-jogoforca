import react from "react";
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

    const gamesWord = [...palavras]

    const [sortWord, setSortWord] = react.useState()

    const [botaoChooseWord, setBotaoChooseWord] = React.useState(<div className="choose-word" onClick={EscolherPalavra}>Escolher palavra</div>)

    gamesWord.sort(() => Math.random() - 0.5)

    const [arr, setArr] = React.useState([])


    function EscolherPalavra() {
        setBotaoChooseWord(<div className="choose-word gray">Escolher palavra</div>)
        setSortWord(gamesWord[0])
        setArr(gamesWord[0].split(''))
    }







    return (
        <>
            <div className="top-part">
                <img src={imagemForca} alt="" />


                <div className="right-side">

                    {botaoChooseWord}

                    <div className="palavraAleatória">{arr.map((c) => ("_ "))}</div>

                </div>
            </div>





















            <div className="bottom-part">

                <div className="keyboard">
                    {alfabeto.map((l) => <div className="testekey">{l}</div>)}
                </div>

                <div className="kick">
                    {/* "Já sei, a palavra é:" */}
                    <input placeholder={sortWord}></input>
                    <div className="kick-word">Chutar</div>
                </div>

            </div>
        </>
    )
}
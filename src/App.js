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




export default function App() {


    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const [clicados, setClicados] = React.useState([])

    const [imagemForca, setImagemForca] = React.useState(image0)

    const gamesWord = [...palavras]

    const [sortWord, setSortWord] = react.useState()

    const [botaoChooseWord, setBotaoChooseWord] = React.useState(<div className="choose-word" onClick={EscolherPalavra}>Escolher palavra</div>)

    gamesWord.sort(() => Math.random() - 0.5)

    const [arr, setArr] = React.useState([])

    const [hiddenWord, setHiddenWord] = react.useState([])



    function EscolherPalavra() {

        setBotaoChooseWord(<div className="choose-word gray">Escolher palavra</div>)
        setSortWord(gamesWord[0])
        setArr(gamesWord[0].split(''))


        const letrass = []
        for (let i = 0; i < gamesWord[0].length; i++) {
            letrass.push(" _ ")
        }
        setHiddenWord(letrass)

        setTralala(false)
    }






    function verificarLetra(char, ind) {
        setClicados([...clicados, ind])

        const str = sortWord
        const semAcento = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        const array = semAcento.toUpperCase().split('')

        array.map((caracterSemAcento, indiceSemAcento) => verificarCaractere(caracterSemAcento, indiceSemAcento, char))
    }


    const arraySemNome = [...hiddenWord]




    function verificarCaractere(c, i, l) {
        let contador = 0
        if (l === c) {
            arraySemNome[i] = sortWord[i]
            setHiddenWord(arraySemNome)
            contador = 1
        } 
        if (contador = 0){
            alert('letra errada')
        }
    }







    const [tralala, setTralala] = React.useState(true)


    function KeyboardON() {
        return (
            <div className="keyboard">
                {alfabeto.map((l, i) => {
                    if (tralala == true) {
                        return (
                            <div className="testekey clicada">{l}</div>
                        )
                    } else {
                        if (clicados.includes(i)) {
                            return (<div className="testekey clicada" onClick={() => alert("essa letra já foi clicada")}>{l}</div>)
                        } else {
                            return (<div className="testekey" onClick={() => { verificarLetra(l, i) }}>{l}</div>)
                        }
                    }
                })}
            </div>
        )
    }



    return (
        <>
            <div className="top-part">
                <img src={imagemForca} alt="" onClick={() => setTralala(false)} />


                <div className="right-side">

                    {botaoChooseWord}

                    <div className="palavraAleatória">{
                        // arr.map((c) => ("_ "))
                        hiddenWord
                    }</div>

                </div>
            </div>


            <div className="bottom-part">
                <KeyboardON />

                <div className="kick">
                    {/* "Já sei, a palavra é:" */}
                    <input placeholder={sortWord}></input>
                    <div className="kick-word" onClick={() => (alert('oi'))}>Chutar</div>
                </div>

            </div>
        </>
    )
}
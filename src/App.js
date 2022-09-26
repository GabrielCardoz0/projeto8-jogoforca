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

    const gamesWord = [...palavras]

    const [sortWord, setSortWord] = react.useState()

    const [botaoChooseWord, setBotaoChooseWord] = React.useState(<div data-identifier="choose-word" className="choose-word" onClick={EscolherPalavra}>Escolher palavra</div>)

    gamesWord.sort(() => Math.random() - 0.5)

    const [hiddenWord, setHiddenWord] = react.useState([])

    const listaImagens = [image0, image1, image2, image3, image4, image5, image6]

    const [contadorImg, setContadorImg] = React.useState(0)

    const [classePalavra, setClassePalavra] = React.useState('normal')

    const contador = [0]

    const [palavraChute, setPalavraChute] = react.useState('')

    const [trocarInput, setTrocarInput] = React.useState(false)

    const arraySemNome = [...hiddenWord]

    let palavraEscondida;

    const [tralala, setTralala] = React.useState(true)

    const [desabilitarInput, setDesabilitarInput] = React.useState('disabled')

    function EscolherPalavra() {

        setBotaoChooseWord(<div data-identifier="choose-word" className="choose-word gray">Escolher palavra</div>)
        setSortWord(gamesWord[0])

        const letrass = []
        for (let i = 0; i < gamesWord[0].length; i++) {
            letrass.push(" _ ")
        }
        setHiddenWord(letrass)

        setTralala(false)

        setDesabilitarInput('')

        setTrocarInput(true)
    }

    function verificarLetra(char, ind) {
        setClicados([...clicados, ind])

        const str = sortWord
        const semAcento = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        const array = semAcento.toUpperCase().split('')

        array.map((caracterSemAcento, indiceSemAcento) => verificarCaractere(caracterSemAcento, indiceSemAcento, char))

        let novoContador = 0

        if (contador[0] === 0) {
            setContadorImg(contadorImg + 1)
            novoContador = contadorImg + 1
        }
        contador[0] = 0

        if (novoContador === 6) {
            ErrouPalavra()
        }

        if (palavraEscondida === sortWord) {
            AcertouPalavra()
        }


    }

    function verificarCaractere(c, i, l) {
        if (l === c) {
            arraySemNome[i] = sortWord[i]
            setHiddenWord(arraySemNome)
            contador[0] = 3

            palavraEscondida = arraySemNome.toString().replace(/,/g, "")
            // console.log(palavraEscondida)
        }

    }

    function KeyboardON() {
        return (
            <div className="keyboard">
                {alfabeto.map((l, i) => {
                    if (tralala === true) {
                        return (
                            <div data-identifier="letter" className="testekey clicada">{l}</div>
                        )
                    } else {
                        if (clicados.includes(i)) {
                            return (<div data-identifier="letter" className="testekey clicada" onClick={() => alert("essa letra já foi clicada")}>{l}</div>)
                        } else {
                            return (<div data-identifier="letter" className="testekey" onClick={() => { verificarLetra(l, i) }}>{l}</div>)
                        }
                    }
                })}
            </div>
        )
    }

    function chutarPalavra() {
        const stringVazia = ''
        if (palavraChute.toLocaleLowerCase() === sortWord.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {
            AcertouPalavra()
        } else if (palavraChute !== stringVazia){
            ErrouPalavra()
        }

    }

    function AcertouPalavra() {
        alert('Parabéns, Você acertou a palavra!')
        setClassePalavra('acertou')
        setHiddenWord(sortWord)
        setDesabilitarInput('disabled')
        setTralala(true)


        setBotaoChooseWord(<div data-identifier="choose-word" className="choose-word" onClick={ReiniciarJogo}>Reiniciar Jogo</div>)
    }

    function ErrouPalavra() {
        alert('Game-Over. Você errou a palavra. :(')
        setClassePalavra('errou')
        setHiddenWord(sortWord)
        setDesabilitarInput('disabled')
        setTralala(true)
        setContadorImg(6)


        setBotaoChooseWord(<div data-identifier="choose-word" className="choose-word" onClick={ReiniciarJogo}>Reiniciar Jogo</div>)
    }

    function ReiniciarJogo(){

        setBotaoChooseWord(<div data-identifier="choose-word" className="choose-word gray">Escolher palavra</div>)
        setSortWord(gamesWord[0])

        const letrass = []
        for (let i = 0; i < gamesWord[0].length; i++) {
            letrass.push(" _ ")
        }
        setHiddenWord(letrass)

        setTralala(false)

        setDesabilitarInput('')

        setTrocarInput(true)

        setClicados([])

        setTrocarInput(true)

        setContadorImg(0)

        setClassePalavra('normal')
    }


    return (
        <>
            <div className="top-part">
                <img data-identifier="game-image" src={listaImagens[contadorImg]} alt="" />
                <div className="right-side">
                    {botaoChooseWord}
                    <div className="palavraAleatória"><span data-identifier="word" className={classePalavra}>{hiddenWord}</span></div>
                </div>
            </div>


            <div className="bottom-part">
                <KeyboardON />
                <div className="kick">
                    {/* "Já sei, a palavra é:" */}
                    <input data-identifier="type-guess" placeholder="Já sei, a palavra é:" disabled={desabilitarInput} onChange={(e) => setPalavraChute(e.target.value)}></input>
                    <div data-identifier="guess-button" className="kick-word" onClick={() => {
                        if (trocarInput) {
                            chutarPalavra()
                        }
                    }
                    }>Chutar</div>
                </div>
            </div>
        </>
    )
}
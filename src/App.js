import React from "react";

import image0 from "./assets/forca0.png"
import image1 from "./assets/forca1.png"
import image2 from "./assets/forca2.png"
import image3 from "./assets/forca3.png"
import image4 from "./assets/forca4.png"
import image5 from "./assets/forca5.png"
import image6 from "./assets/forca6.png"

export default function App() {

    return (
        <>
            <div class="top-part">
                <img src={image6} alt="" />
                <div className="choose-word">Escolher palavras</div>
            </div>

            <div class="bottom-part">
                <div className="keyboard">
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                    <div className="testekey">A</div>
                </div>

                <div className="kick">
                    <input placeholder="Já sei, a palavra é:"></input>
                    <div className="kick-word">Chutar</div>
                </div>

            </div>
        </>
    )
}
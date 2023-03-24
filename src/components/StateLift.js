import React, {useState} from "react";

function Output(props) {
    return (
        <output>{props.getWord()}</output>
    );
}

function Button(props) {
    return(
        <button onClick={() => props.whenClicked()}>{props.label}</button>
    );
}

export default function StateLift() {
    const[words, setWords] = useState(["Appuyez pour afficher un mot..."])

    function setSeriousWords() {
        setWords(["Carré", "Prospective", "Non", "Comité  d'entreprise", "Art"])
    }

    function setSillyWords() {
    setWords(["Zigoto", "Eye-liner", "Ouaf", "Abracadabrantesque", "Ornithoryne"])
    }

    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)]
    }
    return (
         <div className="inner">
            <h2 className="margin-1"><Output getWord={() => getRandomWord()}/></h2>
            <span className="margin-1 padding-5 "><Button className="btn btn-secondary" label="Sérieux" whenClicked={() => setSeriousWords()}/></span>
            <span className="margin-1 padding-5 "><Button className="btn btn-secondary" label="Fantasque" whenClicked={() => setSillyWords()}/></span>
        </div>
    );
}
import React, {useState} from "react";

function Button(props) {
    return(
        <button onClick={() => props.whenClicked()}>{props.label}</button>
    );
}

function DecoretedNumber(props) {
    return(
        <h2 className="margin-1">
            {props.content}
        </h2>
    );
}
export default function ViewUpdate() {

    const[numberArray, setNumberArray] = useState(["***", 0, "***"]);

    function mutateOriginal() {
        //On incrémente le nombre dans le tableau puis on renvoie le tableau
        numberArray.splice(1, 1, numberArray[1] + 1);
        return numberArray;
    }

    function mutateCopy() {
        //On copie le tableau, on y incrémente le nombre, on renvoie la copie
        const copy = [...numberArray];
        copy.splice(1, 1, numberArray[1] + 1);
        return copy;
    }

    return (
        <div className="inner">
            <DecoretedNumber content={numberArray}/>
            <h4>Mise à jour de l'état avec : </h4>
            <ul>
                <li>
                    <h4>
                        <Button label="1" whenClicked={() => setNumberArray(mutateOriginal())}/>
                        L'objet original muté - Mise à jour de l'état mais pas de la vue (Pas de changement détecté).
                    </h4>
                </li>
                <li>
                    <h4>
                        <Button label="2" whenClicked={() => setNumberArray(mutateCopy())}/>
                        Une copie muté - Mise à jour de l'état et de la vue (Changement détecté).
                    </h4>
                </li>
            </ul>
        </div>
    );
}
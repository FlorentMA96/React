import React, { useState} from "react";

function Button(props) {
    return (
        <button className={props.style} onClick={() => props.whenClicked()}>
            {props.label}
        </button>
    )
}

function MenuBar(props) {

    return (
        <div className="inner">
            {/* children : Tout ce qui se trouvera à l'intérieur des balises <Menubar></MenuBar> */}
            {props.children}
            {/* cancelButton : le contenu de la propriete <Menubar> cancelButton = {} */}   
            {props.cancelButton}
        </div>
    )
}


export default function Composition() {

    const [styles, setStyles] = useState(
        ["btn-secondary", "btn-secondary"]
    );

    function udpdateStyle(type){
        switch (type) {
            case "cold":
                setStyles(["btn-primary", "btn-success"]);
                break;
            case "warm":
                setStyles(["btn-warning", "btn-danger"]);
                break;
            case "cancel":
                setStyles(["btn-secondary", "btn-secondary"]);
                break;   
            default:
                break;
        }
    }

    return (
        <MenuBar cancelButton={
            <Button
                label="Annuler"
                style="m-1 btn btn-secondary"
                whenClicked={() => udpdateStyle("cancel")}
            />
        }>
            <Button
                label="Couleurs froides"
                style={"m-1 btn " + styles[0]}
                whenClicked={() => udpdateStyle("cold")}
            />
            <Button
                label="Couleurs chaude"
                style={"m-1 btn " + styles[1]}
                whenClicked={() => udpdateStyle("warm")}
            />   
        </MenuBar> 
    )

}
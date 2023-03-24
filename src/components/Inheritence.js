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
            <Button
                label="Couleurs froides"
                style={"m-1 btn " + props.coldStyle}
                whenClicked={() => props.whenColdClicked()}
            />
            <Button
                label="Couleurs chaude"
                style={"m-1 btn " + props.warmStyle}
                whenClicked={() => props.whenWarmClicked()}
            />
            <Button
                label="Annuler"
                style="m-1 btn btn-secondary"
                whenClicked={() => props.whenCancelClicked()}
            />
        </div>
    );

}

export default function Inheritence() {

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

    return(
        <div>
            <MenuBar
                coldStyle={styles[0]}
                warmStyle={styles[1]}
                whenColdClicked={() => udpdateStyle("cold")}
                whenWarmClicked={() => udpdateStyle("warm")}
                whenCancelClicked={() => udpdateStyle("cancel")}
            />
        </div>
    )

}
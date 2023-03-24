import React, { useState} from "react";

export default function Bootstrap() {

    const [classNames, setClassNames] = useState("btn btn-secondary");
    const [fieldText, setFieldText] = useState("");

    function getButtonClassNames() {
        setClassNames("btn btn-" + fieldText.toLowerCase());
        setFieldText("");
    }

    return (
        <div className="container">
            <div className="m-4">
                <h4 className="text-center">Tapez une de ces catégories :</h4>
                <h4 className="text-center fst-italic">
                    primary - secondary - light - dark - info - success - warning - danger - link
                </h4>
            </div>
            <div className="row">
                <div className="offset-4 col-2">
                    <input
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Catégorie de couleur"
                        value={fieldText}
                        onChange={inputfield => setFieldText(inputfield.target.value)}
                    />
                </div>
                <div className="col-2">
                    <button className={classNames} onClick={() => getButtonClassNames()}>
                        Colorer
                    </button>
                </div>
            </div>
        </div>
    );
}
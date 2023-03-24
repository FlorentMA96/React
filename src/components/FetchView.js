import React, { useState} from "react";

export default function FetchView(props) {



    return(
        <div>
            <button className="btn btn-primary m-3" onClick={() => props.onFetch()}>
                Chercher
            </button>
            {props.books}
        </div>
    );
}
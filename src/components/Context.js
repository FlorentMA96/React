import React, { useState, useContext } from "react";
import { myContext } from "./App";

function UserLabel() {
    const [user] = useContext(myContext);
    return (
        <h2 className="m-3">
            {user.login}
        </h2>
    );
}

function NewUserButton() {
    const [user, setUser] = useContext(myContext);

    return (
        <button 
            className="btn btn-primary m-3" 
            onClick={() => setUser({login: (user.login === "admin" ? "valider" : "erreur")})}>
                Se Connecter
        </button>
    );
}

function MenuBar() {
    return (
        <div className="d-flex">
            <NewUserButton/>
            <UserLabel/>
        </div>
    );

}

export default function Context() {

    const [user, setUser] = useState({ login: "admin"})

    return (
        <myContext.Provider value={[user, setUser]}>
            <MenuBar/>
        </myContext.Provider>
    );
}
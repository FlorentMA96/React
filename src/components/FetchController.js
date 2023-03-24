import React, { useState} from "react";
import { nanoid } from "nanoid";
import "whatwg-fetch";


import FetchView from "./FetchView";
import { json } from "react-router-dom";

export default function FetchController() {

    const [books, setBooks] = useState([]);

    function fetchBooks() {
        setBooks("Chargement...")
        fetch("https://www.anapioficeandfire.com/api/books")
        .then(response => response.json())
        .then(json => setBooks(() => {
            const books = [];
            for (let i = 0; i < json.length; i++) {
                books.push(
                        <li className="margin-1">{json[i].name}</li>
                );
            }
            return <ul>{books}</ul>;
        }));
    }

    return(
        <FetchView books={books} onFetch={() => fetchBooks()}/>
    );
}
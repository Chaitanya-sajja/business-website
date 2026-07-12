import { useState } from "react";
import "./Header.css";

function Header() {

    const [title, setTitle] = useState("Business Website");

    function changeTitle() {
        setTitle("Golden Eye Business Solutions");
    }
    function resetTitle() {
        setTitle("Business website");
    }
    return (
        <header className="header">
            <h1>{title}</h1>

            <button onClick={changeTitle}>
                Change Title
            </button>
            <button onClick={resetTitle}> Reset title </button>
        </header>
    );
}

export default Header;
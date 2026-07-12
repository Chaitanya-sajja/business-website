import { useState } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
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
            <>
    <Navbar />

    <header className="header">

        <h1>{title}</h1>

        <button onClick={changeTitle}>
            Change Title
        </button>

        <button onClick={resetTitle}>
            Reset Title
        </button>

    </header>
</>
        </header>
        
    );
}

export default Header;
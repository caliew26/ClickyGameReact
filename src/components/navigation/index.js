import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function NavBar(){
    return (
        <nav className="nav navbar-dark navbar-expand{-sm|-md|-lg|-xl}">
            {/* I want the game to reset when the name is clicked */}
            <Link className="navbar-brand navbar-text form-inline" to="/">
            Giphy-Clicky Game
            </Link>
            <div className="navbar-nav">
                <p className="nav-item">
                    Wanna test your memory? This is a different kind of memory game.  You're going to have 12 images, click one, and then remember which ones you've clicked because I'm going to shuffle them after every click.  Can you remember them all?  If you click the wrong one, game over, you lose!
                </p>
            </div>
        </nav>
    )
}

export default NavBar;
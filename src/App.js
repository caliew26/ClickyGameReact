import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/navigation";
import Footer from "./components/Footer";
import cardTiles from "./cardTiles.json";
import CardTile from "./components/Card";
import {Container, Row, Col } from "./components/Grid";
import Input from "./components/Input";

class App extends Component {
  //I want this to be my array in cardTiles.json
  state = {
    cardTiles,
    score: 0,
    highscore: 0
  }

  gameOver = () => {
    //this is going to be when the user clicks the same box twice, the game will be over
  }

  restartGame = () => {
    //this will be a reset of the score
    //could be combined with "gameOver"?
  }

  scoreIncrease = () => {
    //this will be for the onclick and the score increases
    this.state.cardTiles.map()
  }

  render() {
    return (
      <Router>
        <NavBar/>
          <div className="row">
            <div className="container">
              <div>
                {this.state.cardTiles.map(cardTilesImage => (
                  <CardTile
                    id={cardTilesImage.id}
                    key={cardTilesImage.id}
                    images={cardTilesImage.image}
                    alt={cardTilesImage.name}
                  />
                ))}
              </div>
            </div>
          </div>
          <Footer/>
      </Router>
    );
  }
}
export default App;

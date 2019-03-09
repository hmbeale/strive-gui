import React from "react";
import GUI from "./components/gui.js";
import { playerMoveForward, playerAttack, playerDefend,
         playerFlee } from './components/mainLogic.js'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      blockOneText: 'Take care. ',
      blockTwoText: 'You are journeying across a landscape of some peril. ',
      blockThreeText: 'Welcome to Strive. ',
    };
  }

  handleButtonOneClick = () => {
    this.setState(
      {
      blockThreeText: this.state.blockTwoText,
      blockTwoText: this.state.blockOneText,
      blockOneText: playerMoveForward(),
     });
  }

  handleButtonTwoClick = () => {
    //playerAttack returns text based on game logic
    this.setState(
      {
        blockThreeText: this.state.blockTwoText,
        blockTwoText: this.state.blockOneText,
        blockOneText: playerAttack(),
     });
  }

  handleButtonThreeClick = () => {
    //playerDefend returns text based on game logic
    this.setState(
      {
        blockThreeText: this.state.blockTwoText,
        blockTwoText: this.state.blockOneText,
        blockOneText: playerDefend(),
     });
  }

  handleButtonFourClick = () => {
    //playerFlee returns text based on game logic
    this.setState(
      {
        blockThreeText: this.state.blockTwoText,
        blockTwoText: this.state.blockOneText,
        blockOneText: playerFlee(),
     });
  }

  render() {
    const blockOneText = this.state.blockOneText;
    const blockTwoText = this.state.blockTwoText;
    const blockThreeText = this.state.blockThreeText;

    return (
      <GUI
        blockOneText = {blockOneText}
        blockTwoText = {blockTwoText}
        blockThreeText = {blockThreeText}
        handleButtonOneClick={this.handleButtonOneClick}
        handleButtonTwoClick = {this.handleButtonTwoClick}
        handleButtonThreeClick = {this.handleButtonThreeClick}
        handleButtonFourClick = {this.handleButtonFourClick}
        />
    )
  }
}

export default App;

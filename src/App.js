import React from "react";
import GUI from "./components/gui.js";
import { playerMoveForward, playerAttack, playerDefend,
         playerFlee } from './components/mainLogic.js'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      blockOneText: 'Welcome to strive',
      blockTwoText: '',
      blockThreeText: '',
      blockFourText: 'you are journeying across a landscape of some peril',
      blockFiveText: 'welcome to strive'
    };
  }

  handleButtonOneClick = () => {
    this.setState(
      {
      blockFiveText: this.state.blockFourText,
      blockFourText: this.state.blockThreeText,
      blockThreeText: this.state.blockTwoText,
      blockTwoText: this.state.blockOneText,
      blockOneText: playerMoveForward(),
     });
  }

  handleButtonTwoClick = () => {
    //playerAttack returns text based on game logic
    this.setState(
      {
        blockFiveText: this.state.blockFourText,
        blockFourText: this.state.blockThreeText,
        blockThreeText: this.state.blockTwoText,
        blockTwoText: this.state.blockOneText,
        blockOneText: playerAttack(),
     });
  }

  handleButtonThreeClick = () => {
    //playerDefend returns text based on game logic
    this.setState(
      {
        blockFiveText: this.state.blockFourText,
        blockFourText: this.state.blockThreeText,
        blockThreeText: this.state.blockTwoText,
        blockTwoText: this.state.blockOneText,
        blockOneText: playerDefend(),
     });
  }

  handleButtonFourClick = () => {
    //playerFlee returns text based on game logic
    this.setState(
      {
        blockFiveText: this.state.blockFourText,
        blockFourText: this.state.blockThreeText,
        blockThreeText: this.state.blockTwoText,
        blockTwoText: this.state.blockOneText,
        blockOneText: playerFlee(),
     });
  }

  render() {
    const blockOneText = this.state.blockOneText;
    const blockTwoText = this.state.blockTwoText;
    const blockThreeText = this.state.blockThreeText;
    const blockFourText = this.state.blockFourText;
    const blockFiveText = this.state.blockFiveText;

    return (
      <GUI
        blockOneText = {blockOneText}
        blockTwoText = {blockTwoText}
        blockThreeText = {blockThreeText}
        blockFourText = {blockFourText}
        blockFiveText = {blockFiveText}
        handleButtonOneClick={this.handleButtonOneClick}
        handleButtonTwoClick = {this.handleButtonTwoClick}
        handleButtonThreeClick = {this.handleButtonThreeClick}
        handleButtonFourClick = {this.handleButtonFourClick}
        />
    )
  }
}

export default App;

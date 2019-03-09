import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    width: 165,
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class ContainedButtons extends React.Component {

  handleButtonOneClick = () => {
    this.props.handleButtonOneClick();
  }

  handleButtonTwoClick = () => {
    this.props.handleButtonTwoClick();
  }

  handleButtonThreeClick = () => {
    this.props.handleButtonThreeClick();
  }

  handleButtonFourClick = () => {
    this.props.handleButtonFourClick();
  }


  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={this.handleButtonOneClick}
        >
          Travel Forward
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick = {this.handleButtonTwoClick}
        >
          Attack
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick = {this.handleButtonThreeClick}
        >
          Defend
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick = {this.handleButtonFourClick}
        >
          Flee
        </Button>
      </div>
    );
  }
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContainedButtons);

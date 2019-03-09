import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import MyCardContent from './myCardContent.js';
import MyCardActions from './myCardActions.js';

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  card: {
    marginTop: theme.spacing.unit * 4,
    maxWidth: 375,
    marginLeft: "auto",
    marginRight: "auto",
    height: 635,
    [theme.breakpoints.down('sm')]: {
      marginTop:0,
    }
  }
});

class GUI extends React.Component {

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
    const blockOneText = this.props.blockOneText;
    const blockTwoText = this.props.blockTwoText;
    const blockThreeText = this.props.blockThreeText;
    const blockFourText = this.props.blockFourText;
    const blockFiveText = this.props.blockFiveText;

    return (
      <Card className={classes.card}>
        <MyCardContent
          blockOneText = {blockOneText}
          blockTwoText = {blockTwoText}
          blockThreeText = {blockThreeText}
          blockFourText = {blockFourText}
          blockFiveText = {blockFiveText}
          />
        <MyCardActions
          handleButtonOneClick = {this.handleButtonOneClick}
          handleButtonTwoClick = {this.handleButtonTwoClick}
          handleButtonThreeClick = {this.handleButtonThreeClick}
          handleButtonFourClick = {this.handleButtonFourClick}
          />
      </Card>
    );
  }
}


GUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GUI);

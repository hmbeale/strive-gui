import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import MyCardContent from './myCardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  button: {
    background: 'grey',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  altButton: {
    background: 'green',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
};

class DynamicClassName extends React.Component {
  state = {
    color: 'default',
    text: this.props.text
  };

  handleClick = event => {
    this.setState({ text: this.state.text === 'anotherSampleText' ? 'sampleText' : 'anotherSampleText',
      color: this.state.color === 'green' ? 'grey' : 'green' });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography gutterBottom variant="h5" component="h2">
          {this.state.text}
        </Typography>
      <Button variant="contained" onClick={this.handleClick}>
        click me to change colors
      </Button>
        <Button
          className={classNames(classes.button, {
            [classes.altButton]: this.state.color === 'green',
          })}
        >
        <Typography component="p">
          {this.state.text}
        </Typography>

        </Button>
      </React.Fragment>
    );
  }
}

DynamicClassName.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DynamicClassName);

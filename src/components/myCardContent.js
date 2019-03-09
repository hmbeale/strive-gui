import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  media: {
  height: 300,
  },
  cardcontent: {
    height: 480,
    position:'relative',
  },
  text: {
    height: 140,
  }

});
class MyCardContent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <CardContent className = {classes.cardcontent}>

      <pre>
        <Typography component="p" className={classes.text}>
          {this.props.blockThreeText}
        </Typography>
      </pre>

      <pre>
        <Typography component="p" className={classes.text}>
          {this.props.blockTwoText}
        </Typography>
      </pre>


      <pre>
        <Typography component="p" className={classes.text}>
          {this.props.blockOneText}
        </Typography>
      </pre>

      </CardContent>
    );
  }
}

MyCardContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyCardContent);

import React from 'react';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  media: {
  height: 300,
  }
});

function MyCardMedia(props) {
  const { classes } = props;

  return (
    <CardMedia
      className = {classes.media}
      image = {require ('../thumbnails/map0.png')}
      title = {props.mediaPath}
    />
  );
}

MyCardMedia.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyCardMedia);

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styles = {
  root: {
  },
  flex: {
    flex: 1,
  },
  cartBtn: {
    minWidth: 'auto',
  },
}

const ButtonAppBar = ({ classes, title }) => (
  <div className={classes.root}>
    <AppBar position="fixed">
      <Toolbar disableGutters>
        <IconButton className={classes.menuButton}>
          <Link to="/home">
            <i className="material-icons">home</i>
          </Link>
        </IconButton>
        <Typography type="title" color="inherit" className={classes.flex}>
          {title}
        </Typography>
        <Button color="contrast" className={classes.cartBtn}>
          <Link to="/shop">
            <i className="material-icons">add_shopping_cart</i>
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  </div>
)

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
}

export default withStyles(styles)(ButtonAppBar)
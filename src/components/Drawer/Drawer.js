import DrawerM from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import * as React from 'react';
import Box from '../Box/Box';
import Button from '../Button/Button';
import Divider from '../Divider/Divider';
import Icon from '../Icon/Icon';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import ListItemIcon from '../ListItemIcon/ListItemIcon';
import ListItemText from '../ListItemText/ListItemText';



/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
/**
 * @uxpindocurl https://mui.com/components/drawers/#main-content
 */
function Drawer(props) {
  const [state, setState] = React.useState({
    top: props.open,
    left: props.open,
    bottom: props.open,
    right: props.open,    
  });
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <Icon>inbox</Icon> : <Icon>mail</Icon>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <Icon>inbox</Icon> : <Icon>mail</Icon>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {[props.anchor].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <DrawerM {...props}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            variant={props.variant}
          >
            {list(anchor)}
          </DrawerM>
        </React.Fragment>
      ))}
    </div>
  );
}

Drawer.propTypes = {
  /**
   * Side from which the drawer will appear. */
  anchor: PropTypes.oneOf(['bottom', 'left', 'right', 'top']),

  /**
   * The content of the component.
   */
  /** @uxpinignoreprop */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component. See CSS API https://mui.com/api/drawer/#css for more details.
   */
  /** @uxpinignoreprop */
  classes: PropTypes.object,

  /**
   * The variant to use.
   */
   variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary']),

  /** The duration for the transition, in milliseconds. 
   * You may specify a single timeout for all transitions, 
   * or individually with an object. */
   transitionDuration: PropTypes.number,

  /**
   * The elevation of the drawer.
   */
  elevation: PropTypes.number,

  /**If true, the backdrop is not rendered. */
  hideBackdrop: PropTypes.bool,

  /**
   * If true, the component is shown.
   */
   open: PropTypes.bool,

  /**Props applied to the Modal element. */
  /** @uxpinignoreprop */
  ModalProps: PropTypes.object,

  /**
   *Callback fired when the component requests to be closed.
    Signature:
    function(event: object) => void
    event: The event source of the callback.
  */
  onClose: PropTypes.func,

  /**
   * Props applied to the Paper element.
   */
  /** @uxpinignoreprop */
  PaperProps: PropTypes.object,

  /**
   * Props applied to the Slide element.
   */
  /** @uxpinignoreprop */
  SlideProps: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional 
   * CSS styles. See the `sx` page for more details.
   */
  sx: PropTypes.object,
}

export default Drawer;



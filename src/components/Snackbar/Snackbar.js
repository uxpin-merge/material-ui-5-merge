import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import SnackbarM from '@mui/material/Snackbar';
import IconButton from '../IconButton/IconButton';
import Icon from '../Icon/Icon';

/**
 * @uxpindocurl https://mui.com/components/skeleton/#main-content
 */
export default function Snackbar(props) {

  const { uxpinRef, ...other } = props;

  const [open, setOpen] = React.useState(props.open);


  React.useEffect(() => {
    setOpen(props.open)
  }, [props.open]); // Only re-run the effect if open prop changes


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment >
      <div >
        {props.undo ?
          <Button color="primary" size="small" onClick={handleClose} >
            UNDO
          </Button>
          :
          null}

        {props.children}
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <Icon fontSize="small">close</Icon>
        </IconButton>
      </div>
    </React.Fragment>
  );

  return (
    <SnackbarM
      {...other}
      open={open}
      action={action}
      ref={uxpinRef}
    />
  );
}


Snackbar.propTypes = {

  /**
 * The message to display.
 */
  message: PropTypes.string,

  /**
   * If true, the component is shown.
   */
  open: PropTypes.bool,

  /**
 * If true, the undo button is shown.
 */
  undo: PropTypes.bool,

  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   * @uxpinignoreprop
   */
  action: PropTypes.node,

  /**
   * The anchor of the Snackbar. 
   * On smaller screens, the component grows to occupy all the available width, the horizontal alignment is ignored.
   * @uxpinignoreprop
   */
  actionOrigin: PropTypes.object,

  /**
   * The number of milliseconds to wait before automatically calling the onClose function. 
   * onClose should then set the state of the open prop to hide the Snackbar. 
   * This behavior is disabled by default with the null value.
* @uxpinignoreprop
   */
  autoHideDuration: PropTypes.number,

  /**
   * The content of the component.
    * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * Props applied to the ClickAwayListener element.
   * @uxpinignoreprop
   */
  ClickAwayListenerProps: PropTypes.object,

  /**
   * Props applied to the SnackbarContent element.
   * @uxpinignoreprop
   */
  ContentProps: PropTypes.object,

  /**
   * If true, the autoHideDuration timer will expire even if the window is not focused.
   * @uxpinignoreprop
   */
  disableWindowBlurListener: PropTypes.bool,

  /**
   * When displaying multiple consecutive Snackbars from a parent rendering a single <Snackbar/>, add the key prop to ensure independent treatment of each message. 
   * e.g. <Snackbar key={message} />, otherwise, the message may update-in-place and features such as autoHideDuration may be canceled.
   * @uxpinignoreprop
   */
  key: PropTypes.node,



  /**
   * Callback fired when the component requests to be closed. Typically onClose is used to set state in the parent component, which is used to control the Snackbar open prop. 
   * The reason parameter can optionally be used to control the response to onClose, for example ignoring clickaway.
   */
  onClose: PropTypes.func,


  /**
   * The number of milliseconds to wait before dismissing after user interaction. If autoHideDuration prop isn't specified, it does nothing. 
   * If autoHideDuration prop is specified but resumeHideDuration isn't, we default to autoHideDuration / 2 ms.
   * @uxpinignoreprop
   */
  resumeHideDuration: PropTypes.number,

  /**
   * The component used for the transition. Follow this guide to learn more about the requirements for this component.
   * @uxpinignoreprop
   */
  TransitionComponent: PropTypes.elementType,

  /**
   * The duration for the transition, in milliseconds. 
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  // transitionDuration: PropTypes.number | { appear?: number, enter?: number, exit?: number },

  /**
   * Props applied to the transition element. By default, the element is based on this Transition component.
   * @uxpinignoreprop
   */
  TransitionProps: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
}

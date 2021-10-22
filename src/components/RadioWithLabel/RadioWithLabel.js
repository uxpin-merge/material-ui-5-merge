import React from "react";
import PropTypes from "prop-types";
import FormControlLabelM from "../FormControlLabel/FormControlLabel";
import Radio from "../Radio/Radio";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function RadioWithLabel(props) {
  const classes = useStyles();

  return (
    <FormControlLabelM
      {...props}
      htmlFor="radioWithLabel"
      control={
        <Radio
          id="radioWithLabel"
          inputProps={{ role: "radio", "aria-checked": props.checked }}
          color={props.color}
          size={props.size}
        />
      }
      label={props.label}
      className={classes.root}
    />
  );
}

RadioWithLabel.propTypes = {
  /**
   * If `true`, the checkbox appears selected.
   * @uxpinbind onChange 1
   */
  checked: PropTypes.bool,

  /**
   * If `true`, the checkbox will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The label text.
   */
  label: PropTypes.string,

  /**
   * The value of the component.
   */
  value: PropTypes.string,
    /**
   * The size of the component. small is equivalent to the dense checkbox styling.
   */
     size: PropTypes.oneOf(['small', 'medium', 'large']),


  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'error',
    'success',
    'warning',
  ]),
  /**
   * The position of the label.
   */
  labelPlacement: PropTypes.oneOf(["end", "start", "top", "bottom"]),

  /**
   * Change event to use with UXPin interactions.
   */
  onChange: PropTypes.func,

  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   * @uxpinignoreprop
   */
  control: PropTypes.element,
};

RadioWithLabel.defaultProps = {
  // NOTE: Checked must be controlled state from the outset, otherwise changing state in the app will trigger an error
  // see: https://fb.me/react-controlled-components
  checked: false,
  onChange: () => undefined,
};

export { RadioWithLabel as default };

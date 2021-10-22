import React from "react";
import PropTypes from "prop-types";
import FormControlLabelM from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function RadioWithLabel(props) {
  const classes = useStyles();

  // Unique Id created by lodash
  const id = _.uniqueId("radioWithLabel-");

  return (
    <FormControlLabelM
      {...props}
      htmlFor={id}
      control={
        <Radio
          id={id}
          inputProps={{ role: "radio", "aria-checked": props.checked }}
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

import React from "react";
import PropTypes from "prop-types";
import FormControlLabelM from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function CheckboxWithLabel(props) {
  const classes = useStyles();

  // Unique Id created by lodash
  const id = _.uniqueId("checkboxWithLabel-");

  return (
    <FormControlLabelM
      {...props}
      htmlFor={id}
      control={
        <Checkbox
          id={id}
          inputProps={{ role: "switch", "aria-checked": props.checked }}
        />
      }
      label={props.label}
      className={classes.root}
    />
  );
}

CheckboxWithLabel.propTypes = {
  /**
   * If `true`, the checkbox is checked.
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
   * Change event to use with UXPin interactions.
   */
  onChange: PropTypes.func,

  /**
   * The position of the label.
   */
  labelPlacement: PropTypes.oneOf(["end", "start", "top", "bottom"]),

  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   * @uxpinignoreprop
   */
  control: PropTypes.element,
};

CheckboxWithLabel.defaultProps = {
  // NOTE: Checked must be controlled state from the outset, otherwise changing state in the app will trigger an error
  // see: https://fb.me/react-controlled-components
  checked: false,
  onChange: () => undefined,
};

export { CheckboxWithLabel as default };

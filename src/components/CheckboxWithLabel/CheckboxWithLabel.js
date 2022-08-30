import React from "react";
import PropTypes from "prop-types";
import FormControlLabelM from "../FormControlLabel/FormControlLabel";
import Checkbox from "../Checkbox/Checkbox";
import { v4 as uuidv4 } from 'uuid';


function CheckboxWithLabel(props) {

  // Unique Id 
  const id = uuidv4();

  return (
    <FormControlLabelM
      {...props}
      htmlFor={id}
      control={
        <Checkbox
          id={id}
          inputProps={{ role: "switch", "aria-checked": props.checked }}
          size={props.size}
          color={props.color}
          checked={props.checked}
        />
      }
      label={props.label}

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

    /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
     color: PropTypes.oneOf([
      'default',
      'primary',
      'secondary',
      'error',
      'success',
      'warning',
    ]),
};

export { CheckboxWithLabel as default };

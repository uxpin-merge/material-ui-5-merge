import React from "react";
import PropTypes from "prop-types";
import FormControlLabelM from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";


function FormControlLabel(props) {
  const { controlType, ...other } = props;
  const id = `input-${other.value}`;

  let controlComponent = "";

  if (controlType == 'radio') {
    controlComponent = <Radio id={id} inputProps={{ role: "radio", "aria-checked": other.checked }} />
  }
  else if (controlType == 'checkbox') {
    controlComponent = <Checkbox id={id} inputProps={{ role: "checkbox", "aria-checked": other.checked }} />
  }
  else if (controlType == 'switch') {
    controlComponent = <Switch id={id} inputProps={{ role: "switch", "aria-checked": other.checked }} />
  }

  return (
    <div>
    <FormControlLabelM
      {...other}
      htmlFor={id}
      control={controlComponent}
      label={other.label}
    />
    </div>
  );
}

FormControlLabel.propTypes = {
  /**
* A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
*/
  controlType: PropTypes.oneOf(['radio', 'switch', 'checkbox']),
  /**
   * The label text.
   */
  label: PropTypes.string,

  /**
   * The value of the component.
   */
  value: PropTypes.string,

  name: PropTypes.string,
  
  /**
   * The position of the label.
   */
  labelPlacement: PropTypes.oneOf(["end", "start", "top", "bottom"]),

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
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   * @uxpinignoreprop
   */
  control: PropTypes.element,



  /**
 * Change event to use with UXPin interactions.
 */
  onChange: PropTypes.func,
};

FormControlLabel.defaultProps = {
  // NOTE: Checked must be controlled state from the outset, otherwise changing state in the app will trigger an error
  // see: https://fb.me/react-controlled-components
  checked: false,
  onChange: () => undefined,
};

export { FormControlLabel as default };

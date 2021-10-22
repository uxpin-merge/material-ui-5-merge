import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "../FormControlLabel/FormControlLabel";
import FormControl from "../FormControl/FormControl";
import FormLabel from "../FormLabel/FormLabel";
import PropTypes from "prop-types";

export default function CheckboxGroup(props) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.grouplabel}</FormLabel>
      <FormGroup {...props}>
        {React.Children.map(props.children, (child, index) => {
   

          return (
            <FormControlLabel
              value={child.props.value}
              checked={child.props.checked}
              control={
                <Checkbox
                  id="radio-group"
                  color={props.color}
                  size={props.size}
                  // checked={false}
                  inputProps={{
                    role: "switch",
                    "aria-checked": props.checked,
                  }}
                />
              }
              htmlFor="radio-group"
              label={child.props.label}
              labelPlacement={props.labelPlacement}
              disabled={child.props.disabled}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
}

CheckboxGroup.propTypes = {

  /**
 * Display text over the radio group.
 */
  grouplabel: PropTypes.string,

  /**
* The position of the label.
*/
  labelPlacement: PropTypes.oneOf(["end", "start", "top", "bottom"]),

  /**
   * The value of the initially selected radio button.
   * @uxpinbind onChange 1
   * @uxpinpropname  Selected Value
   */
  value: PropTypes.string,

  /**
   * The content of the component.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

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
   * The name used to reference the value of the control.
   * @uxpinignoreprop
   */
  name: PropTypes.string,

  /**
   * @uxpinignoreprop
   */
  onKeyDown: PropTypes.func,

  /**
   * display selection controls in a single row.
   */
  row: PropTypes.bool,

  /**
   * Change event to use with UXPin interactions.
   */
  onChange: PropTypes.func,

};

CheckboxGroup.defaultProps = {
  onChange: () => undefined,
};

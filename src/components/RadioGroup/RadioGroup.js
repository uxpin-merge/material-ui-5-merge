import React from "react";
import Radio from "../Radio/Radio";
import RadioGroupM from "@mui/material/RadioGroup";
import FormControlLabel from "../FormControlLabel/FormControlLabel";
import FormControl from "../FormControl/FormControl";
import FormLabel from "../FormLabel/FormLabel";
import PropTypes from "prop-types";

export default function RadioGroup(props) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.grouplabel}</FormLabel>
      <RadioGroupM {...props}>
        {React.Children.map(props.children, (child, index) => {
   

          return (
            <FormControlLabel
              value={child.props.value}
              checked={child.props.checked}
              control={
                <Radio
                  id="radio-group"
                  inputProps={{
                    role: "radio",
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
      </RadioGroupM>
    </FormControl>
  );
}

RadioGroup.propTypes = {

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

RadioGroup.defaultProps = {
  onChange: () => undefined,
};

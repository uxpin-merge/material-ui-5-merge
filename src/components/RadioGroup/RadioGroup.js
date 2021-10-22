import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroupM from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PropTypes from "prop-types";

export default function RadioGroup(props) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.grouplabel}</FormLabel>
      <RadioGroupM {...props}>
        {React.Children.map(props.children, (child, index) => {
          // Unique Id created by lodash
          let id = _.uniqueId("radio-with-label-");
          
          return (
            <FormControlLabel
              value={child.props.value}
              checked={child.props.checked}
              control={
                <Radio
                  id={id}
                  inputProps={{
                    role: "radio",
                    "aria-checked": props.checked,
                  }}
                />
              }
              htmlFor={id}
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
   * Display text over the radio group.
   */
  grouplabel: PropTypes.string,

  /**
   * display selection controls in a single row.
   */
  row: PropTypes.bool,

  /**
   * Change event to use with UXPin interactions.
   */
  onChange: PropTypes.func,

    /**
   * The position of the label.
   */
  labelPlacement: PropTypes.oneOf(["end", "start", "top", "bottom"]),

};

RadioGroup.defaultProps = {
  onChange: () => undefined,
};

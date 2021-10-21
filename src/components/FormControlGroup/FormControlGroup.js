import * as React from 'react';
import PropTypes from 'prop-types';
import RadioGroupM from '@mui/material/RadioGroup';
import FormControlLabel from '../FormControlLabel/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FormControlGroup(props) {
  const { controlType, ...other } = props;
  
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
              controlType={props.controlType}
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

FormControlGroup.propTypes = {

    /**
* A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
*/
controlType: PropTypes.oneOf(['radio', 'switch', 'checkbox']),
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

FormControlGroup.defaultProps = {
  onChange: () => undefined,
};

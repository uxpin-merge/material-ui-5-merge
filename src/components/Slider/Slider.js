import React from 'react';
import PropTypes from "prop-types";
import SliderM from '@mui/material/Slider';
import Icon from '../Icon/Icon';
// import { iconVariants } from '../Icon/icon-variants';

import Stack from '@mui/material/Stack';

// Features Missing:
// 1. Custom Marks. Need to change props from just bool to array | bool -https://mui.com/components/slider/#minimum-distance
// 2. Restricted Mark Values - https://mui.com/components/slider/#minimum-distance
// 4. Range slider, with default props being able to take array of 2 values. eg. defaultValues={[20, 40]}
// 5. Range slider minimum distance - https://mui.com/components/slider/#minimum-distance
// 6. Slider with input field - https://mui.com/components/slider/#minimum-distance
// 7. Scale prop


export default function Slider(props) {
  const [value, setValue] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <SliderM value={value} onChange={handleChange} valueLabelDisplay={props.valueLabelDisplay} {...props} />
  );
}

// Need to add support for Aria props
Slider.propTypes = {
  /**
   * The size of the slider.
   */
  size: PropTypes.oneOf(['small', 'medium']),

  /**
   * The minimum allowed value of the slider. Should not be equal to max.
   */
  min: PropTypes.number,

  /**
   * The maximum allowed value of the slider. Should not be equal to min.
   */
  max: PropTypes.number,

  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.arrayOf(PropTypes.number) | PropTypes.number,

  /**
   * Controls when the value label is displayed:
   * auto the value label will display when the thumb is hovered or focused.
   * on will display persistently.
   * off will never display.
   */
  valueLabelDisplay: PropTypes.oneOf(['auto', 'off', 'on']),

  
  /**
   * The format function the value label's value.
   * When a function is provided, it should have the following signature:
   * {number} value The value label's value to format - {number} index The value label's index to format
   * @uxpinignoreprop
   */
  valueLabelFormat: PropTypes.func | PropTypes.string,
  
  /**
   * The granularity with which the slider can step through values. 
   * (A "discrete" slider.) The min prop serves as the origin for the valid values. 
   * We recommend (max - min) to be evenly divisible by the step.
   * When step is null, the thumb can only be slid onto marks provided with the marks prop.
   */
  step: PropTypes.number,

  /**
   * Marks indicate predetermined values to which the user can move the slider. 
   * If true the marks are spaced according the value of the step prop. If an array, it should contain objects with value and an optional label keys.
   */
  marks: PropTypes.bool,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'string']),

  /**
   * The component orientation.
   */
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),

  /**
   * The track presentation:
   * normal the track will render a bar representing the slider value.
   * inverted the track will render a bar representing the remaining slider value.
   * false the track will render without a bar.
   */
  track: PropTypes.oneOf([false, true, 'inverted']),

  /**
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool,

  /**
     * The component used for the root node. Either a string to use a HTML element or a component.
     */
  component: PropTypes.string,
  
  /**
   * Name attribute of the hidden input element.
   */
  name: PropTypes.string,

  /**
   * If true, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   * @uxpinignoreprop
   */
  disableSwap: PropTypes.bool,

  /**
   * The components used for each slot inside the Slider. Either a string to use a HTML element or a component.
   * @uxpinignoreprop
   */
  components: PropTypes.object,

  /**
   * The props used for each slot inside the Slider
   * @uxpinignoreprop
   */
  componentsProps: PropTypes.object,

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider. This is important for screen reader users.
   * @uxpinignoreprop
   */
  getAriaLabel: PropTypes.func,

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider. This is important for screen reader users.
   * @uxpinignoreprop
   */
  getAriaValueText: PropTypes.func,

  /**
   * Indicates whether the theme context has rtl direction. It is set automatically.
   * @uxpinignoreprop
   */
  isRtl: PropTypes.bool,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * Custom Style Object
   */
  sx: PropTypes.object,
}
import * as React from 'react';
import PropTypes, { func, string } from 'prop-types';
import RatingM from '@mui/material/Rating';
import Icon from '../Icon/Icon';
import { iconVariants } from '../Icon/icon-variants'

/**
 * @uxpindocurl https://mui.com/api/rating/#main-content
 */
function Rating(props) {
  return (
    <RatingM 
      {...props}
      emptyIcon={props.emptyIcon && <Icon>{props.emptyIcon}</Icon>}
      icon={props.icon && <Icon>{props.icon}</Icon>}
      getLabelText={(value) => `${value} Rating${value !== 1 ? 's' : ''}`}
    />
  )
}

Rating.propTypes = {
  /**
   * @uxpinignoreprop
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
    * The icon to display when empty.
    */
  emptyIcon: PropTypes.oneOf(iconVariants),

  /**
   * The icon to display.
   * @uxpinpropname Full Icon
   */
  icon: PropTypes.oneOf(iconVariants),

  /**
   * Maximum rating.
   * @uxpinpropname Max Rating
   */
  max: PropTypes.number,

  /**
   * The minimum increment value change allowed.
   */
  precision: PropTypes.string,

  /**
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool,
  
  /**
   * Removes all hover effects and pointer events.

   */
  readOnly: PropTypes.bool,

  /**
   * @uxpinignoreprop
   * Override or extend the styles applied to the component.
   */
  defaultValue: PropTypes.number,

  /**
   * @uxpinignoreprop
   * Override or extend the styles applied to the component.
   */
  emptyLabelText: PropTypes.node,

  /**
   * @uxpinignoreprop
   * Override or extend the styles applied to the component.
   */
  getLabelText: PropTypes.func,

  /**
   * If true, only the selected icon will be highlighted.
   * @uxpinignoreprop
   */
  highlightSelectedOnly: PropTypes.bool,

  /**
   * The name attribute of the radio input elements. 
   * This input name should be unique within the page. 
   * Being unique within a form is insufficient since the name is used to generated IDs.
   */
  name: PropTypes.string,

  /**
   * The size of the component.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', string]),

  /**
   * The rating value.
   * @uxpinbind onChange 1
   */  
  value: PropTypes.number,

  /**
   * On click event to use with UXPin interactions.
   */
  onChange: PropTypes.func,

  /**
   * Callback function that is fired when the hover state changes.
   */
  onChangeActive: PropTypes.func,

    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
     sx: PropTypes.object,
}

export default Rating

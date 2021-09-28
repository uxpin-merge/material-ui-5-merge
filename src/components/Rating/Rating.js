import * as React from 'react';
import PropTypes, { func } from 'prop-types';
import RatingM from '@mui/material/Rating';
import Icon from '../Icon/Icon';

function Rating(props) {
  return (
    <RatingM 
      {...props}
      emptyIcon={props.emptyIcon && <Icon>{props.emptyIcon}</Icon>}
      icon={props.icon && <Icon>{props.icon}</Icon>}
      getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
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
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * @uxpinignoreprop
   * Override or extend the styles applied to the component.
   */
  defaultValue: PropTypes.number,

  /**
   * The icon to display when empty.
   */
  emptyIcon: PropTypes.node,

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
   */
  highlightSelectedOnly: PropTypes.bool,

  /**
   * The icon to display.
   */
  icon: PropTypes.node,

  /**
   * Maximum rating.
   */
  max: PropTypes.number,

  /**
   * The name attribute of the radio input elements. 
   * This input name should be unique within the page. 
   * Being unique within a form is insufficient since the name is used to generated IDs.
   */
  name: PropTypes.string,

  /**
   * On click event to use with UXPin interactions.
   */
  onChange: PropTypes.func,

  /**
   * The minimum increment value change allowed.
   */
  precision: PropTypes.string,

  /**
   * The size of the component.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  /**
   * The rating value.
   */  
  value: PropTypes.number,
}

export default Rating

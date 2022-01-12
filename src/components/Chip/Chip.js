import React from 'react';
import PropTypes from "prop-types";
import ChipM from '@mui/material/Chip';
import Icon from '../Icon/Icon';
import Avatar from '../Avatar/Avatar';
import { iconVariants } from '../Icon/icon-variants';

/**
 * @uxpindocurl https://mui.com/components/chips/
 */
export default function Chip(props) {
  const [chipDeleted, setChipDeleted] = React.useState(false);

  return (
    <>
      {!chipDeleted ? (
        <ChipM
          {...props}
          onDelete={
            props.deletable
              ? () => {
                  setChipDeleted(true);
                }
              : null
          }
          deleteIcon={
            props.iconDelete ? 
            <Icon>{props.iconDelete}</Icon>
            : null
          }
          icon={
            props.iconStart ? 
            <Icon>{props.iconStart}</Icon>
            : null
          }
        />
      ) : null}
    </>
  )}

Chip.propTypes = {
  /**
   * The content of the component.
   */
  // label: PropTypes.node,
  label: PropTypes.string,

  /** 
   * The Avatar element to display.
   * Choose between displaying Icon or Avatar
   * @uxpinignoreprop
   */
  avatar: PropTypes.element,

  /**
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If true, the chip will appear clickable.
   */
  clickable: PropTypes.bool,

  /**
   * If true, the chip will appear show delete icon.
   */
  deletable: PropTypes.bool,

  /**
   * Custom prop
   * Icon
   * Prop did not load in UXPin editor when using PropTypes.oneOf(iconVariants)
   */
  iconStart: PropTypes.string,

  /**
   * Custom prop
   * Delete icon
   * Prop did not load in UXPin editor when using PropTypes.oneOf(iconVariants)
   */
  iconDelete: PropTypes.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),

  /**
   * The size of the component.
   */
  size: PropTypes.oneOf(['small', 'medium']),

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['filled', 'outlined']),

  //
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   * @uxpinpropname DOM Element Type
   */ 
  component: PropTypes.oneOf(['a', 'div']),

  /**
   * The href attibute of the element.
   * Only works when component is set to 'a'
   */
  href: PropTypes.string,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,

  /**
   * Doesn't work when using PropTypes.oneOf(iconVariants)
   * so made custom prop iconDelete
   * @uxpinignoreprop
   */
  deleteIcon: PropTypes.element,

  /**
   * Doesn't work when using PropTypes.oneOf(iconVariants)
   * so have to enter something similar to <Icon>home</Icon>
   * @uxpinignoreprop
   */
  icon: PropTypes.element,

  /**
   * If true, the chip will appear clickable, and will raise when pressed, even if the onClick prop is not defined. 
   * If false, the chip will not appear clickable, even if onClick prop is defined. 
   */
  onClick: PropTypes.func,

  /**
   * Delete event to use with UXPin interactions.
   * @uxpinignoreprop
   */
  onDelete: PropTypes.func,
}

Chip.defaultProps = {
  onDelete: () => null,
};
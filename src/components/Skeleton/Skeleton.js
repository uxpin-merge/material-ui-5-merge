import * as React from 'react';
import PropTypes from 'prop-types';
import SkeletonM from '@mui/material/Skeleton';

/**
 * @uxpindocurl https://mui.com/api/skeleton/#main-content
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
function Skeleton(props) {
  const { uxpinRef, ...other } = props;
  return (
    <SkeletonM {...other}>{props.children}</SkeletonM>
  )
}

Skeleton.propTypes = {
  /**
   * The animation. If false the animation effect is disabled.
   */
  animation: PropTypes.oneOf(['pulse', 'wave', 'false']),

  /**
   * Optional children to infer width and height from.
   * @uxpinpignoreprop
   * */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component. See CSS API below for more details.
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * Height of the skeleton. Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */
  height: PropTypes.number,

  /**
   * The type of content that will be rendered.
   */
  variant: PropTypes.oneOf(['circular', 'rectangular', 'text']),

  /**
   * Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own.
   */
  width: PropTypes.number,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
}

export default Skeleton;
import React from "react";
import PropTypes from "prop-types";
import PaginationM  from '@mui/material/Pagination';

/**
 * @uxpindocurl https://mui.com/api/pagination/
 */
function Pagination(props) {
    return (
        <PaginationM {...props} />
    )
} 
  
Pagination.propTypes = {
  /**
   * The total number of pages.
   * @uxpinpropname No. Pages
   */
  count: PropTypes.number,
  
  /**
   * Number of always visible pages at the beginning and end.
   */
  boundaryCount: PropTypes.number,

  /**
   * Number of always visible pages before and after the current page.
   */
  siblingCount: PropTypes.number,

  /**
   * The page selected by default when the component is uncontrolled.
   */
  defaultPage: PropTypes.number,

  /**
   * The current page.
   * @uxpinpropname Curent Page
   */
  page: PropTypes.number,

  /**
   * If true, hide the next-page button.
   */
  hideNextButton: PropTypes.bool,

  /**
   * If true, hide the previous-page button.
   */
  hidePrevButton: PropTypes.bool,

  /**
   * If true, hide the first-page button.
   */
  showFirstButton: PropTypes.bool,

  /**
   * If true, hide the last-page button.
   */
  showLastButton: PropTypes.bool,

  /**
   * The active color.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'standard']),

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['outlined', 'text']),

  /**
   * The sahpe of the pagination items.
   */
  shape: PropTypes.oneOf(['circular', 'rounded']),

  /**
   * The size of the component.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,

  /**
   * @uxpinignoreprop
   */
  renderItem: PropTypes.func,

  /**
   * @uxpinignoreprop
   */
  getItemAriaLabel: PropTypes.func,

  /**
   * Callback fired when the expand/collapse state is changed.
   */
  onChange: PropTypes.func,
}

export default Pagination;

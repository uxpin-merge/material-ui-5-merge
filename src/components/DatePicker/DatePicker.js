import * as React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePickerM from '@mui/lab/DatePicker';

/**
 * @uxpindocurl https://mui.com/api/date-picker/
 */
function DatePicker(props) {
  const [date, setDate] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePickerM 
        {...props}
        openTo="day"
        orientation="landscape"
        value={date}
        onChange={(newDate) => {
          setDate(newDate);
        }}
        renderInput={(params) => (
          <TextField 
            {...params} 
            helperText={props.helperText} />
        )}
      />
    </LocalizationProvider>
  );
}

DatePicker.propTypes = {
  /**
   * The label text of the input.
   */
  label: PropTypes.string,

  /**
   * The helper text of the input.
   */
  helperText: PropTypes.node,

  /**
   * The value of the picker.
   * @uxpinignoreprop
   */
  value: PropTypes.node,

  // maxDate: PropTypes.node,
  // minDate: PropTypes.node,
  // mask: PropTypes.string,

  /**
   * If true, show the toolbar even in desktop mode.
   */
  showToolbar: PropTypes.bool,
  
  /**
   * Mobile picker title, displaying in the toolbar.
   */
  toolbarTitle: PropTypes.node,

  /**
   * Mobile picker date value placeholder, displaying if value === null.
   * don't need if using 'new Date()' in state.
   */
  // toolbarPlaceholder: PropTypes.node,

  /**
   * Array of views to show.
   * Examples:
   * ["day"]
   * ["year"]
   * ["month"]
   * ["month", "year"]
   */
  views: PropTypes.object,

  /**
   * Control the popup or dialog open state.
   */
  open: PropTypes.bool,

  /**
   * why do PropTypes.oneOf not show up in merge sometimes?
   */
  // orientation: PropTypes.oneOf('landscape', 'portrait'),

  /**
   * If true, the picker and text field are disabled.
   * */
  disabled: PropTypes.bool,

  /**
   * Make picker read only.
   */
  readOnly: PropTypes.bool,

  /**
   * The renderInput prop allows you to customize the rendered input. 
   * The props argument of this render prop contains props of TextField that you need to forward. 
   * Pay specific attention to the ref and inputProps keys.
   * @uxpinignoreprop
   */
  renderInput: PropTypes.func,

  /**
   * Callback fired when the value (the selected date) changes @DateIOType.
   * @uxpinignoreprop
   */
  onChange: PropTypes.func,

  /**
   * Callback fired when date is accepted @DateIOType.
   * @uxpinignoreprop
   */
  onAccept: PropTypes.func,

  /**
   * Callback that fired when input value or new value prop validation returns new validation error (or value is valid after error). 
   * To implement follow guide below:
   * https://next.material-ui-pickers.dev/guides/forms
   */
  // onError: PropTypes.func,

  /**
   * Callback fired when the popup requests to be opened. Use in controlled mode (see open).
   * @uxpinignoreprop
   */
  onOpen: PropTypes.func,
}

export default DatePicker;
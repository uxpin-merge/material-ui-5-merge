import * as React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePickerM from '@mui/lab/DatePicker';


const VIEWS_LIST = [
  { label: "year", value: ["year"] },
  { label: "day", value: ["day"] },
  { label: "month year", value: ["month", "year"] },
];

const viewsList = [
  ['year'],
  ['year', 'month'],
  ['year', 'month', 'day'],
  ['day', 'month', 'year'],
  ['day']
]

function DatePicker(props) {
  const [date, setDate] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePickerM 
        {...props}
        value={date}
        onChange={(newDate) => {
          setDate(newDate);
        }}
        renderInput={(params) => <TextField {...params} />}
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
   * Array of views to show.
   * @uxpinignoreprop
   */
  views: PropTypes.object,

  /**
   * why do PropTypes.oneOf not show up in merge sometimes?
   */
  orientation: PropTypes.oneOf('landscape', 'portrait'),

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
}

export default DatePicker;

// acceptRegex	
// allowSameDateSelection
// valuecancelText
// className
// clearable	
// clearText
// components	
// componentsProps
// defaultCalendarMonth
// desktopModeMediaQuery
// DialogProps
// disableCloseOnSelect
// disableHighlightToday
// disableMaskedInput
// disableOpenPicker
// getOpenDialogAriaText
// getViewSwitchingButtonText
// InputAdornmentProps
// inputFormat
// inputRef
// leftArrowButtonText
// loading
// mask
// maxDate
// minDate
// okText
// onAccept
// onClose
// onError
// onMonthChange
// onOpen
// onViewChange
// open	
// OpenPickerButtonProps
// openTo
// orientation
// PaperProps
// PopperProps
// reduceAnimations
// renderLoading
// rifmFormatter	
// rightArrowButtonText
// shouldDisableDate
// shouldDisableYear
// showDaysOutsideCurrentMonth
// showTodayButton
// showToolbar
// todayText
// ToolbarComponent
// toolbarFormat	
// toolbarPlaceholder	
// toolbarTitle
// TransitionComponent
// value

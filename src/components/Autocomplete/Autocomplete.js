import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../TextField/TextField';
import AutocompleteM from '@mui/material/Autocomplete';



/**
 * @uxpindocurl https://mui.com/api/autocomplete/
 */
function Autocomplete(props) {
    const {params, ...other} = props;

    
    return (
        <AutocompleteM {...other}
          disablePortal
          id="combo-box-demo"
          sx={{ width: PropTypes.width }}
          renderInput={(params) => <TextField {...params} label={props.label} />} />
    );
}

Autocomplete.propTypes = {
    label: PropTypes.string,
    /**
     * Arrray of options.
     */
    /**  */
    options: PropTypes.array,

    /** Render the input. */
    /**  */    
    renderInput: PropTypes.func,

    /**
     * If 'true', the portion of the selected suggestion that has not been typed by the user, 
     * known as the completion string, appears inline after the input cursor in the textbox. 
     * The inline completion string is visually highlighted and has a selected state.
     */
    autoComplete: PropTypes.bool,

    /**
     * if 'true', the first option is automatically highlighted.
     */
    autoHighLight: PropTypes.bool,

    /**
     * If 'true', the selected option becomes the value of the input when the Autocomplete 
     * loses focus unless the user chooses a different option or changes the character string in the input.
     */
    autoSelect: PropTypes.bool,

    /**
     * Control if the input should be blurred when an option is selected:
     * 'false' the input is not blurred. 
     * 'true' the input is always blurred. 
     * 'touch' the input is blurred after a touch event. 
     * 'mouse' the input is blurred after a mouse event.
     */
    blurOnSelect: PropTypes.oneOf(['mouse', 'touch', PropTypes.bool]),

    /**
     * Props applied to the Chip element.
     */
    /** @uxpinignoreprop */
    ChipProps: PropTypes.object,

    /**
     * Override or extend the styles applied to the component. See CSS API for more details https://mui.com/api/autocomplete/#css.
     */
    /** @uxpinignoreprop */
    classes: PropTypes.object,

    /**
     * The icon to display in place of the default clear icon.
     */
    /** @uxpinignoreprop */
    clearIcon: PropTypes.node,

    /**
     * If 'true', the input's text is cleared on blur if no value is selected.
     * Set to 'true' if you want to help the user enter a new value. 
     * Set to 'false' if you want to help the user resume his search.
     */
    clearOnBlur: PropTypes.bool,

    /**
     * If 'true', clear all values when the user presses escape and the popup is closed.
     */
    clearOnEscape: PropTypes.bool,

    /**
     * Override the default text for the clear icon button.
     * For localization purposes, you can use the provided translations https://mui.com/guides/localization/.
     */
    /** @uxpinignoreprop */
    clearText: PropTypes.string,

    /**
     * Override the default text for the close popup icon button.
     * For localization purposes, you can use the provided translations https://mui.com/guides/localization/
     */
    /** @uxpinignoreprop */
    closeText: PropTypes.string,

    /** 
     * The props used for each slot inside.
     */
    /** @uxpinignoreprop */
    componentsProps: PropTypes.object,

    /**
     * The default value. Use when the component is not controlled.
     */
    /** @uxpinignoreprop */
    defaultValue: PropTypes.string,

    /** if 'true',the input can't be cleared. */
    disableClearable: PropTypes.bool,

    /** if 'true', the popup won't close when a value is selected. */
    disableCloseOnSelect: PropTypes.bool,

    /** if 'true', the component is disabled. */
    disabled: PropTypes.bool,

    /** if 'true', will allow focus on disabled items. */
    disabledItemsFocusable: PropTypes.bool,

    /** if 'true', the list box in the popup will not wrap focus. */
    disableListWrap: PropTypes.bool,

    /** If 'true', the Popper content will be under the DOM hierarchy of the parent component. */
    disablePortal: PropTypes.bool,

    /** A filter function that determines the options that are eligible. 
     * Signature:
     * function(options: Array<T>, state: object) => Array<T>
     * options: The options to render.
     * state: The state of the component.
    */

    filterOptions: PropTypes.func,

    /** if 'true', hide the selected options from the list box */
    filterSelectedOptions: PropTypes.bool,

    /** Force the visibility display of the popup icon. */
    forcePopupIcon: PropTypes.oneOf(['auto', PropTypes.bool]),

    /**
     * If 'true', the Autocomplete is free solo, meaning that the user input is not bound to provided options.
    */
    freeSolo: PropTypes.bool,

    /** If 'true', the input will take up the full width of its container. */
    fullWidth: PropTypes.bool,

    /** The label to display when the tags are truncated (limitTags). 
     * Signature: function(more: number) => ReactNode
     * more: The number of truncated tags.
    */
    /** @uxpinignoreprop */
    getLimitTagsText: PropTypes.func,

    /** Used to determine the disabled state for a given option. 
     * Signature: function(option: T) => boolean
     * option: The option to test.
    */
    getOptionDisabled: PropTypes.func,

    /** Used to determine the string value for a given option. 
     * It's used to fill the input (and the list box options if renderOption is not provided). 
     * Signature: function(option: T) => string*/
    /** @uxpinignoreprop */
    getOptionLabel: PropTypes.func,

    /** If provided, the options will be grouped under the returned string. 
     * The groupBy value is also used as the text for group headings when renderGroup is not provided. 
     * Signature: function(options: T) => string
     * options: The options to group.*/
    /** @uxpinignoreprop */
    groupBy: PropTypes.func,

    /** If 'true', the component handles the "Home" and "End" keys when the popup is open. 
     * It should move focus to the first option and last option, respectively.*/
    handleHomeEndKeys: PropTypes.bool,

    /** This prop is used to help implement the accessibility logic. If you don't provide an id it will fall back to a randomly generated one. */
    id: PropTypes.string,

    /** If true, the highlight can move to the input. */
    /** @uxpinignoreporp */
    includeInputInList: PropTypes.bool,

    /** The input value */
    inputValue: PropTypes.string,

    /** Used to determine if the option represents the given value. 
     * Uses strict equality by default. 
     * ⚠️ Both arguments need to be handled, an option can only match with one value. 
     * Signature: function(option: T, value: T) => boolean
     * option: The option to test.
     * value: The value to test against.*/
    /** @uxpinignoreprop */
    isOptionEqualToValue: PropTypes.func,


    /** The maximum number of tags that will be visible when not focused. Set -1 to disable the limit. */
    /** @uxpinignoreprop */
    limitTags: PropTypes.number,

    /** The component used to render the listbox. */
    /** @uxpinignoreprop */
    ListboxComponent: PropTypes.elementType,

    /** Props applied to the Listbox element. */
    /** @uxpinignoreprop */
    ListboxProps: PropTypes.object,

    /** If 'true', the component is in a loading state. This shows the loadingText in place of suggestions (only if there are no suggestions to show, e.g. options are empty). */
    loading: PropTypes.bool,

    /** Text to display when in a loading state.
      * For localization purposes, you can use the provided translations https://mui.com/guides/localization/. 
    */
    loadingText: PropTypes.node,

    /** If 'true', value must be an array and the menu will support multiple selections. */
    multiple: PropTypes.bool,

    /** Text to display when there are no options.
      * For localization purposes, you can use the provided translations. 
    */
    noOptionsText: PropTypes.node,

    /** Callback fired when the value changes.
     * Signature: function(event: React.SyntheticEvent, value: T | Array<T>, reason: string, details?: string) => void
     * event: The event source of the callback.
     * value: The new value of the component.
     * reason: One of "createOption", "selectOption", "removeOption", "blur" or "clear".
    */
   /** @uxpinignoreprop */
   onChange: PropTypes.func,

   /**
    * Callback fired when the popup requests to be closed. Use in controlled mode (see open).
    * Signature: function(event: React.SyntheticEvent, reason: string) => void
    * event: The event source of the callback.
    * reason: Can be: "toggleInput", "escape", "selectOption", "removeOption", "blur"
    */
   /** @uxpinignoreprop */
   onClose: PropTypes.func,

   /** Callback fired when the highlight option changes. 
    * Signature: function(event: React.SyntheticEvent, option: T, reason: string) => void
    * event: The event source of the callback.
    * option: The highlighted option.
    * reason: Can be: "keyboard", "auto", "mouse".
   */
    /** @uxpinignoreprop */
    onHighlightChange: PropTypes.func,

    /** Callback fired when the input value changes.
     * Signature: function(event: React.SyntheticEvent, value: string, reason: string) => void
     * event: The event source of the callback.
     * value: The new value of the text input.
     * reason: Can be: "input" (user input), "reset" (programmatic change), "clear".
    */
    /** @uxpinignoreprop */
    onInputChange: PropTypes.func,

    /** Callback fired when the popup requests to be opened. Use in controlled mode (see open). 
     * Signature: function(event: React.SyntheticEvent) => void
     * event: The event source of the callback.
    */
    /** @uxpinignoreprop */
    onOpen: PropTypes.func,

    /** If 'true', the component is shown. */
    /** @uxpignoreprop */
    open: PropTypes.bool,

    /** If 'true', the popup will open on input focus. */
    /** @uxpinignoreprop */
    openOnFocus: PropTypes.bool,

    /**
     * If true, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
     */
    readOnly: PropTypes.bool,

    /** Override the default text for the open popup icon button.
      * For localization purposes, you can use the provided translations https://mui.com/guides/localization/.
    */
   /** @uxpinignoreprop */
   openText: PropTypes.string,

   /** The component used to render the body of the popup. */
   /** @uxpinignoreprop */
   PaperComponent: PropTypes.elementType,
   
   /** The component used to position the popup. */
   /** @uxpinignoreprop */
   PopperComponent: PropTypes.elementType,

   /** The icon to display in place of the default popup icon. */
   /** @uxpinignoreprop */
   popupIcon: PropTypes.node,

   /** Render the Group. 
    * Signature: function(option: any) => ReactNode
    * option: The group to render.
   */
   /** @uxpinignoreprop */
   renderGroup: PropTypes.func,

   /** Render the option, use getOptionLabel by default. 
    * Signature: function(props: object, option: T, state: object) => ReactNode
    * props: The props to apply on the li element.
    * option: The option to render.
    * state: The state of the component.
   */
   /** @uxpinignoreprop */
   renderOption: PropTypes.func,

   /** Render the selected value. 
    * Signature: function(value: Array<T>, getTagProps: function) => ReactNode
    * value: The value provided to the component.
    * getTagProps: A tag props getter.
   */
   /** @uxpinignoreprop */
   renderTags: PropTypes.func,
   
   /** If true, the input's text is selected on focus. It helps the user clear the selected value. */
   selectOnFocus: PropTypes.bool,

   /** The size of the component */
   size: PropTypes.oneOf(['small', 'medium']),

   /** The system prop that allows defining system overrides as well as additional CSS styles. 
    * See the `sx` page for more details https://mui.com/system/the-sx-prop/. 
   */
  /** */
  sx: PropTypes.object,

  /** The value of the autocomplete.
    * The value must have reference equality with the option in order to be selected. 
    * You can customize the equality behavior with the 'isOptionEqualToValue' prop. 
  */
/** @uxpinignoreprop */
  value: PropTypes.string,

  width: PropTypes.string,
}

export default Autocomplete;


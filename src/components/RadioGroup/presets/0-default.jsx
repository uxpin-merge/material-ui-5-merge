import * as React from "react";
import RadioGroup from "../RadioGroup";
import Radio from "../../Radio/Radio";
import FormControlLabel from "../../FormControlLabel/FormControlLabel";


export default (
  <RadioGroup uxpId="3" value="yellow" name= "radio-group" grouplabel= "Favorite Color">
    <FormControlLabel
      value="red"
      controlType="radio"
      label="Red"
      uxpId="FormControlLabel1"
    />
    <FormControlLabel
      value="blue"
      controlType="radio"
      label="Blue"
      uxpId="FormControlLabel2"
    />
    <FormControlLabel
      value="yellow"
      controlType="radio"
      label="Yellow"
      uxpId="FormControlLabel3"
    />
    <FormControlLabel
      value="disabled"
      disabled={true}
      controlType="radio"
      label="(Disabled option)"
      uxpId="FormControlLabel4"
    />
  </RadioGroup>
);

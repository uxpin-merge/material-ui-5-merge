import * as React from "react";
import RadioGroup from "../RadioGroup";
import Radio from "../../Radio/Radio";
import RadioWithLabel from "../../RadioWithLabel/RadioWithLabel";


export default (
  <RadioGroup uxpId="3" value="yellow" name= "radio-group" grouplabel= "Favorite Color">
    <RadioWithLabel
      value="red"
      control={<Radio uxpId="radio1" />}
      label="Red"
      uxpId="FormControlLabel1"
    />
    <RadioWithLabel
      value="blue"
      control={<Radio uxpId="radio2" />}
      label="Blue"
      uxpId="FormControlLabel2"
    />
    <RadioWithLabel
      value="yellow"
      control={<Radio uxpId="radio3" />}
      label="Yellow"
      uxpId="FormControlLabel3"
    />
    <RadioWithLabel
      value="disabled"
      disabled={true}
      control={<Radio uxpId="radio4" />}
      label="(Disabled option)"
      uxpId="FormControlLabel4"
    />
  </RadioGroup>
);

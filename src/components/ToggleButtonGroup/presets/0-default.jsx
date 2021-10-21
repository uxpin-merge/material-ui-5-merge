import ToggleButtonGroup from '../ToggleButtonGroup'
import ToggleButton from '../../ToggleButton/ToggleButton';

export default (
  <ToggleButtonGroup uxpId="Toggle-Button-Group-1" value="home">
    <ToggleButton 
      uxpId="Toggle-Button-1" 
      value="home" 
      label="Home" 
      startIcon="home"
    />
    <ToggleButton 
      uxpId="Toggle-Button-2" 
      value="star" 
      label="Star" 
      startIcon="star"
    />
    <ToggleButton 
      uxpId="Toggle-Button-3" 
      value="navigation" 
      label="Navigation" 
      startIcon="navigation"
    />
  </ToggleButtonGroup>
)
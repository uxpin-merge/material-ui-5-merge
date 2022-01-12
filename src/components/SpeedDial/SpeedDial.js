import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box/Box';
import { SpeedDial as SpeedDialM} from '@mui/material';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';




export default function SpeedDial(props) {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDialM
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {props.children.map((child) => (
          <SpeedDialAction
            key={child.name}
            icon={child.icon}
            tooltipTitle={child.name}
          />
        ))}
      </SpeedDialM>
    </Box>
  );
}
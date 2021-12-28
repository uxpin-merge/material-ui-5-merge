import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import Typography from '../../Typography/Typography';
import Link from '../../Link/Link';


export default (
  <Breadcrumbs aria-label="breadcrumb" uxpId='breadcrumb-1'>
    <Link 
      uxpId='link-1'
      underline="hover" 
      color="inherit" 
      href="/" 
    >
      Files
    </Link>
    <Link
      uxpId='link-2'  
      underline="hover"
      color="inherit"
      href="/getting-started/installation/"
    >
      Documents
    </Link>
    <Typography 
      uxpId='link-3'
      color="text.primary"
    >
      Analysis
    </Typography>
  </Breadcrumbs>
)
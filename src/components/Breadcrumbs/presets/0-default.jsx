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
      Merge1
    </Link>
    <Link
      uxpId='link-2'  
      underline="hover"
      color="inherit"
      href="/getting-started/installation/"
    >
      Merge2
    </Link>
    <Typography 
      uxpId='link-3'
      color="text.primary"
    >
      Merge3
    </Typography>
  </Breadcrumbs>
)
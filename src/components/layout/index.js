import React from 'react';

import ServerList from '../serverList';
import ServerName from '../serverName';

import { Grid } from './styles';

function Layout() {
  return (
    <Grid>
      <ServerList />
      <ServerName />
    </Grid>
  );
}

export default Layout;

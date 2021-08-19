import React from 'react';

import ServerList from '../serverList';
import ServerName from '../serverName';
import ChannelInfo from '../channelInfo';

import { Grid } from './styles';

function Layout() {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
    </Grid>
  );
}

export default Layout;

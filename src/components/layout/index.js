import React from 'react';

import ServerList from '../serverList';
import ServerName from '../serverName';
import ChannelInfo from '../channelInfo';
import ChannelList from '../channelList';
import UserInfo from '../userInfo';
import ChannelData from '../channelData';

import { Grid } from './styles';

function Layout() {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData />
    </Grid>
  );
}

export default Layout;

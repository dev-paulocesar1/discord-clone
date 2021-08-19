import React from 'react';

import ChannelButton from '../channelButton';

import { Container, Category, AddCategoryIcon } from './styles';

function ChannelList() {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>

        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="lolzinho" />
      <ChannelButton channelName="valorant" />
      <ChannelButton channelName="csgo" />
    </Container>
  );
}

export default ChannelList;

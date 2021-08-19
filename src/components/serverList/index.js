import React from 'react';

import ServerButton from '../serverButton';

import { Container, Separator } from './styles';

function ServerList() {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={5} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={55} />
      <ServerButton />
      <ServerButton />
    </Container>
  );
}

export default ServerList;

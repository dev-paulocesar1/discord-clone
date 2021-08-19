import React from 'react';

import Logo from '../../assets/images/logo.svg';

import { Button } from './styles';

function ServerButton({ selected, isHome, hasNotifications, mentions }) {
  return (
    <Button
      className={selected ? 'active' : ''}
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
    >
      {isHome && <img src={Logo} alt="Rocketseat" />}
    </Button>
  );
}

export default ServerButton;

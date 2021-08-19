import React from 'react';

import { Container, Role, User, Avatar } from './styles';

function UserList() {
  const UserRow = ({ nickname, isBot }) => {
    return (
      <User>
        <Avatar className={isBot ? 'bot' : ''} />

        <strong>{nickname}</strong>

        {isBot && <span>Bot</span>}
      </User>
    );
  };

  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Paulo Cesar" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Bill Gates" isBot />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
    </Container>
  );
}

export default UserList;

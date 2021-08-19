import styled from 'styled-components';

export const Button = styled.div`
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background-color: ${({ isHome }) =>
    isHome ? 'var(--rocketseat)' : 'var(--primary)'};
  margin-bottom: 8px;
  border-radius: 50%;

  position: relative;
  cursor: pointer;

  > img {
    width: 24px;
    height: 24px;
  }

  &::before {
    content: '';

    width: 9px;
    height: 9px;

    position: absolute;
    top: calc(50% - 4.5px);
    left: -17px;

    display: ${({ hasNotifications }) =>
      hasNotifications ? 'inline' : 'none'};

    background-color: var(--white);
    border-radius: 50%;
  }

  &::after {
    content: '${({ mentions }) => mentions && mentions}';

    width: auto;
    height: 16px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    display: ${({ mentions }) =>
      mentions && mentions > 0 ? 'inline' : 'none'};

    padding: 0 4px;
    background-color: var(--notification);
    border: 4px solid var(--quaternary);
    border-radius: 12px;

    color: var(--white);
    font-size: 13px;
    font-weight: bold;
    text-align: right;
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${({ isHome }) =>
      isHome ? 'var(--rocketseat)' : 'var(--discord)'};
  }
`;

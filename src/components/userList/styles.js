import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;

  max-height: calc(100vh - 46px);

  display: flex;
  flex-direction: column;

  padding: 3px 6px 0 16px;
  background-color: var(--secondary);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: var(--tertiary);
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.span`
  margin-top: 20px;

  color: var(--gray);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  padding: 5px;
  margin-top: 5px;
  border-radius: 4px;
  background: transparent;
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  > strong {
    margin-left: 13px;

    color: var(--white);
    font-weight: 500;
    opacity: 0.7;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    margin-left: 9px;
    padding: 4px 5px;
    border-radius: 4px;
    background-color: var(--discord);

    color: var(--white);
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;

  flex-shrink: 0;

  border-radius: 50%;
  background-color: var(--primary);

  &.bot {
    background-color: var(--mention-detail);
  }
`;

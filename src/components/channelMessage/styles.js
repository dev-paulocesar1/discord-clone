import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-right: 4px;
  padding: 4px 16px;
  background-color: transparent;

  &.mention {
    padding-left: 14px;
    background-color: var(--mention-message);
    border-left: 2px solid var(--mention-detail);
  }

  & + div {
    margin-top: 13px;
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;

  background-color: var(--sencondary);
  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }
`;

export const Message = styled.div`
  min-height: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 17px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  > strong {
    color: var(--white);
    font-size: 16px;
  }

  > span {
    margin-left: 6px;
    padding: 4px 5px;
    border-radius: 4px;
    background-color: var(--discord);

    color: var(--white);
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
  }

  > time {
    margin-left: 6px;

    color: var(--gray);
    font-size: 13px;
  }
`;

export const Content = styled.div`
  color: var(--white);
  font-size: 16px;
  text-align: left;
`;

export const Mention = styled.span`
  color: var(--link);

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

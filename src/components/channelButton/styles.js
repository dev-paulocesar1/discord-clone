import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.2s;

  cursor: pointer;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    color: var(--senary);
    font-size: 15px;
    margin-left: 5px;
  }

  &:hover,
  &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }

    > div:not(:first-child) svg {
      display: inline-block;
      transition: display 0.2s;
    }
  }

  > div:not(:first-child) svg {
    display: none;
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  transition: color 0.2s;
  margin-left: 4px;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

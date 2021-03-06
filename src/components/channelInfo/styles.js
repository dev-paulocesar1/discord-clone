import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';

export const Container = styled.div`
  grid-area: CI;

  display: flex;
  align-items: center;

  padding: 0 17px;

  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;

  color: var(--symbol);
`;

export const Title = styled.div`
  margin-left: 9px;

  color: var(--white);
  font-size: 16px;
  font-weight: bold;
`;

export const Separator = styled.h1`
  width: 1px;
  height: 24px;

  margin: 0 13px;
  background-color: var(--white);
  opacity: 0.2;
`;

export const Description = styled.span`
  color: var(--gray);
  font-size: 15px;
`;

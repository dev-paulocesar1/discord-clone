import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 6px;

  > span {
    color: var(--gray);
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;

  color: var(--symbol);
  cursor: pointer;
`;

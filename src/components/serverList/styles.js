import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100vh;

  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 12px 0px;
  background-color: var(--tertiary);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 32px;

  margin-bottom: 8px;
  border-bottom: 2px solid var(--quaternary);
`;

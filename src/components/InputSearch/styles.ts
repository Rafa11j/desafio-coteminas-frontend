import { FaTimesCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #999;
  border-radius: 20px;
  max-width: 400px;
  width: 30%;
  min-width: 250px;
  padding: 4px 15px;

  > svg {
    color: #999;
  }
`;

export const Input = styled.input`
  flex: 1;
  margin: 0 10px;
  border: none;
  color: #999;
`;

export const ClearIcon = styled(FaTimesCircle)`
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: ${shade(0.2, '#999')};
  }
`;

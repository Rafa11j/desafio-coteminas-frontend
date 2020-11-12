import styled from 'styled-components';

export const Container = styled.div`
  margin: 40px 10%;
`;

export const TitleProductsFound = styled.span`
  padding-bottom: 4px;
  border-bottom: 3px solid orange;
`;

export const GridBody = styled.div`
  margin-top: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Divider = styled.div`
  margin: 20px 0;

  border-bottom: 1px solid #ddd;
`;

export const Select = styled.select`
  padding: 7px 15px;
  border-color: #999;
  color: #999;
  border-radius: 4px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

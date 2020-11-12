import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 4px 15px;

  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

export const CollumnImages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > img {
    height: 55px;
    width: 55px;
    margin: 0 3px;
  }
`;

export const CollumnDetails = styled.div`
  padding: 0 15px;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CollumnPrice = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;

  > p {
    color: #999;
    margin-left: 5px;
  }

  > span {
    margin-left: 5px;
  }
`;

export const Title = styled.span`
  font-size: 14px;
`;

export const Info = styled.div`
  margin-top: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #999;

  > span {
    font-size: 10px;
  }
`;

export const ValueSlash = styled.span`
  text-decoration: line-through;
  color: #999;
`;

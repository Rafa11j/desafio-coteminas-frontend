import {
  FaChevronLeft,
  FaChevronRight,
  FaStepBackward,
  FaStepForward,
} from 'react-icons/fa';
import styled, { css } from 'styled-components';

interface IPaginationItemProps {
  active: boolean;
}

interface IIconButtonProps {
  disabled: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > svg {
    margin-right: 15px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const PaginationItem = styled.div<IPaginationItemProps>`
  border-radius: 4px;
  padding: 5px 15px;
  border: 1px solid #fff;
  transition: 0.2s;

  cursor: pointer;

  &:hover {
    border-color: #999;
  }

  ${props =>
    props.active &&
    css`
      border-color: #999;
    `}
`;

export const StepBackwardIcon = styled(FaStepBackward)<IIconButtonProps>`
  ${props =>
    props.disabled &&
    css`
      color: #ddd;
      cursor: no-drop !important;
    `}
`;

export const ChevronLeftIcon = styled(FaChevronLeft)<IIconButtonProps>`
  ${props =>
    props.disabled &&
    css`
      color: #ddd;
      cursor: no-drop !important;
    `}
`;

export const ChevronRightIcon = styled(FaChevronRight)<IIconButtonProps>`
  ${props =>
    props.disabled &&
    css`
      color: #ddd;
      cursor: no-drop !important;
    `}
`;

export const StepForwardIcon = styled(FaStepForward)<IIconButtonProps>`
  ${props =>
    props.disabled &&
    css`
      color: #ddd;
      cursor: no-drop !important;
    `}
`;

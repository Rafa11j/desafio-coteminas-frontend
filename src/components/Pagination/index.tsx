import React, { useCallback, useEffect, useState } from 'react';

import {
  Container,
  PaginationItem,
  StepBackwardIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  StepForwardIcon,
} from './styles';

interface IProps {
  pagesNumber: number;
  defaultPage: number;
  changePage(page: number): void;
}

const Pagination: React.FC<IProps> = props => {
  const { pagesNumber, changePage, defaultPage } = props;
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const [pageList, setPageList] = useState<number[]>([]);

  const renderPaginationList = useCallback(() => {
    const list = Array.from({ length: pagesNumber }, (_, index) => index + 1);
    setPageList(list);
  }, [pagesNumber]);

  const onPreviousPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  const onNextPage = useCallback(() => {
    if (currentPage < pagesNumber) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, pagesNumber]);

  useEffect(() => {
    renderPaginationList();
  }, [renderPaginationList]);

  useEffect(() => {
    changePage(currentPage - 1);
  }, [currentPage, changePage]);

  return (
    <Container>
      <StepBackwardIcon
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(1)}
      />
      <ChevronLeftIcon disabled={currentPage === 1} onClick={onPreviousPage} />
      {pageList.map(page => (
        <PaginationItem
          active={page === currentPage}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </PaginationItem>
      ))}
      <ChevronRightIcon
        disabled={currentPage === pagesNumber}
        onClick={onNextPage}
      />
      <StepForwardIcon
        disabled={currentPage === pagesNumber}
        onClick={() => setCurrentPage(pagesNumber)}
      />
    </Container>
  );
};

export default Pagination;

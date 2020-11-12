import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { store } from 'react-notifications-component';
import { useSearch } from '../../hooks/search';
import IPaginated from '../../interfaces/paginated';
import api from '../../services/api';
import GridItem from '../GridItem';
import Pagination from '../Pagination';

import {
  Container,
  TitleProductsFound,
  GridBody,
  Divider,
  Select,
  Actions,
  Loading,
} from './styles';

const Grid: React.FC = () => {
  const { search } = useSearch();
  const [loading, setLoading] = useState(false);
  const [elementsPerPage, setElementsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState<IPaginated>({
    data: [],
    elements: 0,
    elementsPerPage: 10,
    firstPage: true,
    lastPage: false,
    page: 0,
    totalElements: 0,
    totalPages: 1,
  });

  const loadProducts = useCallback(async () => {
    setLoading(true);
    try {
      const params = {
        elementsPerPage,
        page: currentPage,
        name: search,
      };
      const response = await api.get('/products', { params });
      setData(response.data);
      setLoading(false);
    } catch {
      setLoading(false);
      store.addNotification({
        title: 'Erro',
        message: 'Falha ao carregar produtos',
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
        },
      });
    }
  }, [elementsPerPage, currentPage, search]);

  const changeElementsPerPage = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setElementsPerPage(parseInt(e.target.value, 10));
      setCurrentPage(0);
    },
    [],
  );

  const changePage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    loadProducts();
  }, [elementsPerPage, loadProducts]);

  return (
    <Container>
      {loading ? (
        <Loading>
          <h1>Carregando...</h1>
        </Loading>
      ) : (
        <>
          <TitleProductsFound>
            {`${data.totalElements} PRODUTOS ENCONTRADOS`}
          </TitleProductsFound>

          <GridBody>
            {data.data.map(product => (
              <GridItem key={product.id} product={product} />
            ))}
          </GridBody>

          <Divider />

          <Actions>
            <Select onChange={changeElementsPerPage} value={elementsPerPage}>
              <option value={5}>05 produtos por página</option>
              <option value={10}>10 produtos por página</option>
              <option value={15}>15 produtos por página</option>
              <option value={20}>20 produtos por página</option>
            </Select>

            <Pagination
              pagesNumber={data.totalPages}
              changePage={changePage}
              defaultPage={currentPage + 1}
            />
          </Actions>
        </>
      )}
    </Container>
  );
};

export default Grid;

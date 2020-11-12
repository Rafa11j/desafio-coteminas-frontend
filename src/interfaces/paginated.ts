import IProduct from './product';

export default interface IPaginated {
  data: IProduct[];
  totalElements: number;
  page: number;
  elements: number;
  elementsPerPage: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
}

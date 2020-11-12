import React, { memo } from 'react';

import {
  Container,
  CollumnDetails,
  CollumnImages,
  CollumnPrice,
  Title,
  Info,
  ValueSlash,
} from './styles';

import defaultImage from '../../assets/default.png';
import IProduct from '../../interfaces/product';
import formatCurrency from '../../utils/formatCurrency';

interface IProps {
  product: IProduct;
}

const GridItem: React.FC<IProps> = props => {
  const { product } = props;
  return (
    <Container>
      <CollumnImages>
        {product.images.length > 0 ? (
          product.images.map((image, index) => (
            <img key={`${product.id}-image-${index}`} src={image} alt="Cama" />
          ))
        ) : (
          <>
            <img src={defaultImage} alt="Cama" />
            <img src={defaultImage} alt="Cama" />
            <img src={defaultImage} alt="Cama" />
            <img src={defaultImage} alt="Cama" />
          </>
        )}
      </CollumnImages>
      <CollumnDetails>
        <Title>{product.name}</Title>
        <Info>
          <span>{`${product.brand} - ${product.description}`}</span>
        </Info>
      </CollumnDetails>
      <CollumnPrice>
        {product.discount !== 0 ? (
          <>
            <ValueSlash>{`R$${formatCurrency(product.price)}`}</ValueSlash>
            <p> por</p>
            <span>{`R$${formatCurrency(product.priceDiscount)}`}</span>
          </>
        ) : (
          <span>{`R$${formatCurrency(product.price)}`}</span>
        )}
      </CollumnPrice>
    </Container>
  );
};

export default memo(GridItem);

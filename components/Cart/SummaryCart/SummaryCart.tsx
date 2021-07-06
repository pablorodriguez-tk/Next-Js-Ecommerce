import { forEach, map } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Icon, Image, Table } from 'semantic-ui-react';
import { useCart } from '../../../hooks/useCart';

const SummaryCart = ({ products, setReloadCart, reloadCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { removeProductCart } = useCart();

  useEffect(() => {
    let price = 0;
    forEach(products, (product) => (price += product.price - product.discount));
    setTotalPrice(price);
  }, [reloadCart, products]);

  const removeProduct = (product) => {
    removeProductCart(product);
    setReloadCart(true);
  };

  return (
    <div className="summary-cart">
      <div className="title">Summary Cart</div>
      <div className="data">
        <Table celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product</Table.HeaderCell>
              <Table.HeaderCell>Plataform</Table.HeaderCell>
              <Table.HeaderCell>Delivery</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {map(products, (product) => (
              <Table.Row key={product.id} className="summary-cart__product">
                <Table.Cell>
                  <Icon
                    name="close"
                    link
                    onClick={() => removeProduct(product.url)}
                  />
                  <Image src={product.poster.url} alt={product.title} />
                  {product.title}
                </Table.Cell>
                <Table.Cell>{product.platform.title}</Table.Cell>
                <Table.Cell>immediate</Table.Cell>
                <Table.Cell>${product.price - product.discount}</Table.Cell>
              </Table.Row>
            ))}

            <Table.Row className="summary-cart__result">
              <Table.Cell className="clear" />
              <Table.Cell colSpan="2">total:</Table.Cell>
              <Table.Cell className="total-price">
                ${totalPrice.toFixed(2)}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default SummaryCart;

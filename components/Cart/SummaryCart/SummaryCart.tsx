import { forEach, map } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Icon, Image, Table } from 'semantic-ui-react';
import { useCart } from '../../../hooks/useCart';

const SummaryCart = ({ products }) => {
  const {} = useCart();
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
                    onClick={() => console.log('borrar')}
                  />
                  <Image src={product.poster.url} alt={product.title} />
                  {product.title}
                </Table.Cell>
                <Table.Cell>{product.platform.title}</Table.Cell>
                <Table.Cell>immediate</Table.Cell>
                <Table.Cell>${product.price}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default SummaryCart;

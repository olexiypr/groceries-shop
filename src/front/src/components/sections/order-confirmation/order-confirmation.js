import React from 'react';
import styles from './order-confirmation.module.scss';
import Button from '../../UI/button/button';
import { Heading } from '../../UI/typography/typography';
import WidthContainer from '../../UI/width-container/container';
import OrderElement from './order-element/order-element';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../../redux/cartSlice';
import OrderService from '../../../services/OrderService';

const Order = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const bill = cart.reduce(
    (acc, curr) => {
      acc.price += +curr.price * +curr.quantity;
      acc.discount += (+curr?.discount || 0) * +curr.quantity;
      return acc;
    },
    { price: 0, discount: 0 },
  );

  const createOrder = async () => {
    const orderData = {
      products: cart.map((product) => ({
        id: product.id,
        quantity: product.quantity,
      })),
      totalCost: bill.price - bill.discount,
      totalDiscount: bill.discount,
      address: user.address,
    };
    try {
      await OrderService.createOrder(orderData);
      dispatch(clearCart());
      navigate('/success');
    } catch (error) {
      console.log(error);
    }
  };

  const toOrderHandler = async () => {
    if (!user.isAuth) {
      navigate('/signup');
      return;
    } else if (!cart.length) {
      return;
    }
    await createOrder();
  };

  const OrderedProductsList = cart.map((product) => (
    <OrderElement
      key={product.id}
      product={product}
    />
  ));

  return (
    <section className={styles['order']}>
      <WidthContainer className={styles['order__list']}>
        {OrderedProductsList}
      </WidthContainer>
      {!cart.length ? (
        <Heading className={styles.empty}>
          There are no items in the cart
        </Heading>
      ) : (
        <WidthContainer className={styles['order__total']}>
          <Heading className={styles['order__total-cost']}>
            {`Total cost: $${bill.price - bill.discount}`}
          </Heading>
          <Heading className={styles['order__total-cost']}>
            {`Discount: $${bill.discount}`}
          </Heading>
        </WidthContainer>
      )}
      <Button showArrow className={styles['order-to']} onClick={toOrderHandler}>
        Order
      </Button>
    </section>
  );
};

export default Order;

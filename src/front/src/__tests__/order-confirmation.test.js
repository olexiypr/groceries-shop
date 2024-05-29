import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import store from '../redux/store';
import Order from '../components/sections/order-confirmation/order-confirmation';
// import OrderService from '../services/OrderService';

const mockOrder = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('../services/OrderService.js', () => {
  return {
    createOrder: () => mockOrder(),
  };
});
jest.mock('../services/ProductService.js', () => {});
jest.mock('../services/AuthService.js', () => {});

describe('Order component', () => {
  beforeEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    useNavigate.mockClear();
    mockOrder.mockClear();
  });

  test('renders ordered products correctly', () => {
    useSelector
      .mockReturnValueOnce({ isAuth: true, address: '123 Main St' })
      .mockReturnValueOnce([
        {
          id: 1,
          name: 'Product 1',
          price: 10,
          discount: 0,
          image: 'product1.jpg',
          quantity: 2,
        },
        {
          id: 2,
          name: 'Product 2',
          price: 20,
          discount: 5,
          image: 'product2.jpg',
          quantity: 1,
        },
      ]);

    render(
      <Provider store={store}>
        <Order />
      </Provider>,
    );

    const product1 = screen.getByText('Product 1');
    const product2 = screen.getByText('Product 2');
    const totalCost = screen.getByText('Total cost: $35');
    const discount = screen.getByText('Discount: $5');

    expect(product1).toBeDefined();
    expect(product2).toBeDefined();
    expect(totalCost).toBeDefined();
    expect(discount).toBeDefined();
  });

  test('renders empty cart message when there are no items in the cart', () => {
    useSelector
      .mockReturnValueOnce({ isAuth: true, address: '123 Main St' })
      .mockReturnValueOnce([]);

    render(
      <Provider store={store}>
        <Order />
      </Provider>,
    );

    const emptyCartMessage = screen.getByText('There are no items in the cart');

    expect(emptyCartMessage).toBeDefined();
  });

  test('navigates to signup page if user is not authenticated', () => {
    useSelector
      .mockReturnValueOnce({ isAuth: false })
      .mockReturnValueOnce([
        { id: 1, name: 'Product 1', price: 10, discount: 0, quantity: 1 },
      ]);

    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(
      <Provider store={store}>
        <Order />
      </Provider>,
    );

    const orderButton = screen.getByText('Order');
    fireEvent.click(orderButton);

    expect(navigate).toHaveBeenCalledWith('/signup');
    expect(mockOrder).not.toHaveBeenCalled();
  });

  test('does not create order if cart is empty', () => {
    useSelector
      .mockReturnValueOnce({ isAuth: true, address: '123 Main St' })
      .mockReturnValueOnce([]);

    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(
      <Provider store={store}>
        <Order />
      </Provider>,
    );

    const orderButton = screen.getByText('Order');
    fireEvent.click(orderButton);

    expect(navigate).not.toHaveBeenCalled();
    expect(mockOrder).not.toHaveBeenCalled();
  });

  test('creates order and clears cart when order is successful', async () => {
    useSelector
      .mockReturnValueOnce({ isAuth: true, address: '123 Main St' })
      .mockReturnValueOnce([
        {
          id: 1,
          name: 'Product 1',
          price: 10,
          discount: 0,
          image: 'product1.jpg',
          quantity: 2,
        },
      ]);

    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Order />
      </Provider>,
    );

    const orderButton = screen.getByText('Order');
    fireEvent.click(orderButton);

    await waitFor(() => {
      expect(mockOrder).toHaveBeenCalled();
    });

    expect(navigate).toHaveBeenCalledWith('/success');

    expect(dispatch).toHaveBeenCalled();
  });

  // Add more tests for other functionality of the Order component
});

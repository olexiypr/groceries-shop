import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import store from '../redux/store';
import Products from '../components/sections/products/products';
import { ModalProvider } from '../context/product-modal';

const mockFetchProducts = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

jest.mock('../services/ProductService.js', () => {
  return {
    getAll: () => mockFetchProducts(),
  };
});
jest.mock('../services/OrderService.js', () => { });
jest.mock('../services/AuthService.js', () => { });

describe('Products component', () => {
  beforeEach(() => {
    useSelector.mockClear();
    useNavigate.mockClear();
  });

  const mockProducts = [
    {
      id: 1,
      type: 'Type 1',
      name: 'Product 1',
      price: 10,
      discount: 0,
      image: 'product1.jpg',
      overview: 'overview',
      description: 'description',
      additionalInfo: 'info',
    },
    {
      id: 2,
      type: 'Type 2',
      name: 'Product 2',
      price: 20,
      discount: 5,
      image: 'product2.jpg',
      overview: 'overview',
      description: 'description',
      additionalInfo: 'info',
    },
  ];

  test('renders products correctly', async () => {
    mockFetchProducts.mockReturnValue({ data: { products: mockProducts, count: 2 } });
    render(
      <Provider store={store}>
        <Products />
      </Provider>,
    );

    await waitFor(() => {
      const product1 = screen.getByText('Product 1');
      const product1Price = screen.getByText('$10.00');
      const product1Image = screen.getAllByAltText('Product 1');

      expect(product1).toBeDefined();
      expect(product1Price).toBeDefined();
      expect(product1Image).toBeDefined();

      const product2 = screen.getByText('Product 2');
      const product2Price = screen.getByText('$15.00');
      const product2Image = screen.getAllByAltText('Product 2');

      expect(product2).toBeDefined();
      expect(product2Price).toBeDefined();
      expect(product2Image).toBeDefined();
    });
  });

  test('renders "No products found" when there are no products', async () => {
    mockFetchProducts.mockReturnValue({ data: { products: [], count: 0 } });

    render(
      <Provider store={store}>
        <Products />
      </Provider>,
    );

    await waitFor(() => {
      const noProducts = screen.getByText('No products found');

      expect(noProducts).toBeDefined();
    });
  });

  test('shows more products when "Show more" is clicked', async () => {
    mockFetchProducts.mockResolvedValueOnce({ data: { products: mockProducts.slice(0, 1), count: 16 } });
    render(
      <Provider store={store}>
        <Products />
      </Provider>,
    );

    await waitFor(() => {
      const showMoreButton = screen.getByText('Show more');

      fireEvent.click(showMoreButton);

      const product1 = screen.getAllByText('Product 1');

      const product2 = screen.getAllByText('Product 2');

      expect(product1).toBeDefined();
      expect(product2).toBeDefined();
    });
  });

  // test('shows only 1 product when "Show Less" is clicked', () => {
  //   useSelector.mockReturnValue(mockProducts);

  //   render(
  //     <Provider store={store}>
  //       <Products />
  //     </Provider>,
  //   );

  //   const showMoreButton = screen.getByText('Show More');

  //   fireEvent.click(showMoreButton);
  //   fireEvent.click(showMoreButton);

  //   const product1 = screen.getByText('Product 1');
  //   const product2 = screen.queryByText('Product 2');

  //   expect(product1).toBeDefined();
  //   expect(product2).toBeNull();
  // });

  // test('opens modal when product card is clicked', async () => {
  //   useSelector.mockReturnValue(mockProducts);

  //   render(
  //     <Provider store={store}>
  //       <ModalProvider>
  //         <Products />
  //       </ModalProvider>
  //     </Provider>,
  //   )

  //   fireEvent.click(screen.getByText('Product 1'));

  //   await waitFor(() => {
  //     const modal = screen.getByTestId('products-modal');
  //     expect(modal).toBeDefined();
  //   });
  // });

  // test('renders products details: overview, toggles between description and additional info', async () => {
  //   useSelector.mockReturnValue(mockProducts);
  //   render(
  //     <Provider store={store}>
  //       <ModalProvider>
  //         <Products />
  //       </ModalProvider>
  //     </Provider>,
  //   )

  //   fireEvent.click(screen.getByText('Product 1'));

  //   await waitFor(() => {
  //     const productOverview = screen.getByText('overview');
  //     expect(productOverview).toBeDefined();
  //   });

  //   const descriptionButton = screen.getByText('Product Description');
  //   const additionalInfoButton = screen.getByText('Additional Info');

  //   expect(descriptionButton).toBeDefined();
  //   expect(additionalInfoButton).toBeDefined();

  //   expect(screen.getByText('description')).toBeDefined();
  //   expect(screen.queryByText('info')).toBeNull();

  //   fireEvent.click(additionalInfoButton);
  //   expect(screen.getByText('info')).toBeDefined();
  //   expect(screen.queryByText('description')).toBeNull();
  // });

  // test('updates input quantity correctly', async () => {
  //   useSelector.mockReturnValue(mockProducts);
  //   render(
  //     <Provider store={store}>
  //       <ModalProvider>
  //         <Products />
  //       </ModalProvider>
  //     </Provider>,
  //   )

  //   fireEvent.click(screen.getByText('Product 1'));

  //   const quantityInput = screen.getByLabelText('Quantity:');
  //   expect(quantityInput.value).toBe('1');

  //   fireEvent.change(quantityInput, { target: { value: '5' } });

  //   expect(quantityInput.value).toBe('5');
  // });

  // test('dispatches addItemToCart action when "Add To Cart" button is clicked', () => {
  //   useSelector.mockReturnValue(mockProducts);
  //   render(
  //     <Provider store={store}>
  //       <ModalProvider>
  //         <Products />
  //       </ModalProvider>
  //     </Provider>,
  //   )

  //   fireEvent.click(screen.getByText('Product 1'));

  //   const addToCartButton = screen.getByText('Add To Cart');
  //   fireEvent.click(addToCartButton);

  //   expect(store.getState().cart.cartCounter).toBe(1);
  //   expect(store.getState().cart.products[0]).toMatchObject({
  //     id: 1,
  //     name: 'Product 1',
  //     price: 10,
  //     discount: 0,
  //     image: 'product1.jpg',
  //     quantity: 1,
  //   });
  // });

  // test('close modal when "X" button is clicked', async () => {
  //   useSelector.mockReturnValue(mockProducts);
  //   render(
  //     <Provider store={store}>
  //       <ModalProvider>
  //         <Products />
  //       </ModalProvider>
  //     </Provider>,
  //   )

  //   fireEvent.click(screen.getByText('Product 1'));

  //   await waitFor(() => {
  //     const modal = screen.getByTestId('products-modal');
  //     expect(modal).toBeDefined();
  //   });

  //   const closeButton = screen.getByText('X');
  //   fireEvent.click(closeButton);

  //   await waitFor(() => {
  //     const modal = screen.queryByTestId('products-modal');
  //     expect(modal).toBeNull();
  //   });
  // });

  // test('close modal when "Add To Cart" button is clicked', async () => {
  //   useSelector.mockReturnValue(mockProducts);
  //   render(
  //     <Provider store={store}>
  //       <ModalProvider>
  //         <Products />
  //       </ModalProvider>
  //     </Provider>,
  //   )

  //   fireEvent.click(screen.getByText('Product 1'));

  //   await waitFor(() => {
  //     const modal = screen.getByTestId('products-modal');
  //     expect(modal).toBeDefined();
  //   });

  //   const addToCartButton = screen.getByText('Add To Cart');
  //   fireEvent.click(addToCartButton);

  //   await waitFor(() => {
  //     const modal = screen.queryByTestId('products-modal');
  //     expect(modal).toBeNull();
  //   });
  // });

  // Add more tests for other functionality of the Products component
});

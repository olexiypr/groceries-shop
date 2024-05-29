import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import ProductCard from './product-card/product-card';
import { Subheading, Heading, Paragraph } from '../../UI/typography/typography';
import Button from '../../UI/button/button';
import styles from './products.module.scss';
import WidthContainer from '../../UI/width-container/container';
import CartLink from '../nav-menu/cart-link/cart-link';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsSlice';
import ModalContext from '../../../context/product-modal';

const Products = () => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  const { onOpen: onOpenModal } = useContext(ModalContext);
  const counter = useSelector((state) => state.cart.cartCounter);

  const [filters, setFilters] = useState({ limit: 8, offset: 0 });
  const [productsData, setProductsData] = useState({ products: [], total: 0 });

  const isOverTotal = useMemo(() => {
    return productsData.products.length >= productsData.total;
  }, [productsData]);

  const showMore = () => {
    setFilters((prev) => ({ ...prev, limit: prev.limit + 8 }));
  };

  const showLess = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setFilters((prev) => ({ ...prev, limit: prev.limit - 8 }));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getAllProducts(filters));
      console.log(response);
      setProductsData(response);
    };
    fetchData();
  }, [dispatch, filters]);

  const productsList = productsData.products.map((product) => (
    <ProductCard
      key={product.name}
      product={product}
      onOpenModal={() => onOpenModal(product)}
    />
  ));

  return (
    <div className={styles.categories}>
      <Subheading className={styles['categories-subheading']}>
        Categories
      </Subheading>
      <Heading className={styles['categories-heading']}>Our Products</Heading>
      {productsData.products.length ? (
        <>
          <WidthContainer>
            <div className={styles['categories__container']} ref={containerRef}>
              {productsList}
            </div>
          </WidthContainer>
          <Button
            showArrow
            onClick={() => {
              isOverTotal ? showLess() : showMore();
            }}
            className={styles['categories-button']}
          >
            {isOverTotal ? 'Show less' : 'Show more'}
          </Button>
        </>
      ) : (
        <Paragraph>No products found</Paragraph>
      )}
      {counter > 0 && <CartLink className={styles['cart-link']} />}
    </div>
  );
};

export default Products;

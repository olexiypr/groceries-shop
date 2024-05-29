import React, { useEffect, useState, useRef } from 'react';
import styles from './products-modal.module.scss';
import { ReactComponent as Rating } from '../../../../img/5-stars.svg';
import { Heading, Paragraph } from '../../../UI/typography/typography';
import ProductPrice from '../product-card/product-price/product-price';
import Button from '../../../UI/button/button';
import WidthContainer from '../../../UI/width-container/container';
import ProductQuantityInput from '../product-card/product-quantity-input/input';
import { CSSTransition } from 'react-transition-group';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../../redux/cartSlice';
import classNames from 'classnames';
import ProductImg from '../product-card/product-image/product-image';

const ProductModal = ({ isOpen, onClose, product }) => {
  const dispatch = useDispatch();
  const [inputQuantity, setInputQuantity] = useState(1);
  const [productInfo, setProductInfo] = useState({
    activeButton: null,
    text: null,
  });
  const nodeRef = useRef(null);

  const handleButtonClick = (button, text) => {
    setProductInfo({ activeButton: button, text: text });
  };

  const inputQuantityHandler = (e) => {
    setInputQuantity(+e.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      handleButtonClick('desc-btn', product?.description);
      document.body.classList.add('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen, product?.description]);

  const addToCartHandler = () => {
    if (inputQuantity < 1) return;
    const addedItem = {
      name: product.name,
      price: product.price,
      discount: product.discount,
      quantity: inputQuantity,
      id: product.id,
      image: product?.image,
    };
    dispatch(addItemToCart(addedItem));
    onClose();
  };

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={300}
      classNames={{
        enter: '',
        enterActive: styles['modal-enter'],
        exit: '',
        exitActive: styles['modal-exit'],
      }}
      mountOnEnter
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className={styles.product}
        data-testid='products-modal'
      >
        <WidthContainer className={styles['product__container']}>
          <div className={styles['product__details']}>
            <ProductImg
              product={product}
              className={styles['product__details-img']}
            />
            <div className={styles['product__details-info']}>
              <Heading className={styles['product-name']}>{product?.name}</Heading>
              <Rating />
              <br />
              <ProductPrice product={product} />
              <Paragraph className={styles['product-paragraph']}>
                {product?.overview}
              </Paragraph>
              <div className={styles['product__controls']}>
                <ProductQuantityInput
                  inputQuantity={inputQuantity}
                  inputQuantityHandler={inputQuantityHandler}
                />
                <Button
                  className={styles['product__controls-btn']}
                  showArrow
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
          <div className={styles['product__description']}>
            <div className={styles['product__buttons']}>
              <Button
                className={classNames({
                  [styles['product__buttons--active']]:
                    productInfo.activeButton === 'desc-btn',
                })}
                onClick={() => handleButtonClick('desc-btn', product.description)}
              >
                Product Description
              </Button>
              <Button
                className={classNames({
                  [styles['product__buttons--active']]:
                    productInfo.activeButton === 'add-btn',
                })}
                onClick={() => handleButtonClick('add-btn', product.additionalInfo)}
              >
                Additional Info
              </Button>
            </div>
            <Paragraph className={styles['product__description-text']}>
              {productInfo.text}
            </Paragraph>
          </div>
          <Button onClick={onClose} className={styles['product-close']}>
            X
          </Button>
        </WidthContainer>
      </div>
    </CSSTransition>
  );
};

export default ProductModal;

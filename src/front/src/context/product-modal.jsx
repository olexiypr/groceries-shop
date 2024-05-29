import React, {createContext, useState} from "react";
import ProductModal from '../components/sections/products/products-modal/products-modal';
import ProductBackdrop from '../components/sections/products/products-modal/product-backdrop';

const ModalContext = createContext({
  onOpen: () => {},
});

export default ModalContext;

export const ModalProvider = ({ children }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [product, setProduct] = useState({});

  const onOpen = (product) => {
    setProduct(product);
    setIsModalOpened(true);
  };

  const onClose = () => {
    setIsModalOpened(false);
    setProduct({});
  };

  return (
    <ModalContext.Provider value={{onOpen}}>
      <ProductModal isOpen={isModalOpened} onClose={onClose} product={product}/>
      {isModalOpened && <ProductBackdrop onClose={onClose} />}
      {children}
    </ModalContext.Provider>
  );
};

import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';  // Poprawiony import
import ProductOptions from '../ProductOptions/ProductOptions';  // Poprawiony import
import Button from '../Button/Button';  // Pozostaje bez zmian
import styles from './Product.module.scss';

const Product = ({ id, name, title, colors, sizes, basePrice }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  const getPrice = () => {
    const size = sizes.find((element) => element.name === currentSize);
    return basePrice + size.additionalPrice;
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductOptions
          sizes={sizes}
          colors={colors}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          prepareColorClassName={prepareColorClassName}
        />
        <Button
          className={styles.button}
          id={id}
          name={name}
          title={title}
          color={currentColor}
          size={currentSize}
          basePrice={getPrice()}
        >
          <span className="fa fa-shopping-cart" />
        </Button>
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;

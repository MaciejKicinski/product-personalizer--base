import PropTypes from 'prop-types';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductOptions = ({
  sizes,
  colors,
  currentSize,
  setCurrentSize,
  currentColor,
  setCurrentColor,
  prepareColorClassName,
}) => {
  return (
    <form>
      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />
      <OptionColor
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
        prepareColorClassName={prepareColorClassName}
      />
    </form>
  );
};

ProductOptions.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  prepareColorClassName: PropTypes.func.isRequired,
};

export default ProductOptions;

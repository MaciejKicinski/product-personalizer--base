import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './OptionSize.module.scss';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map((item) => (
          <li key={item.name}>
            <button
              type="button"
              className={clsx(item.name === currentSize && styles.active)}
              onClick={() => setCurrentSize(item.name)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default OptionSize;

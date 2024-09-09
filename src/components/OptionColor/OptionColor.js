import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './OptionColor.module.scss';

const OptionColor = ({ colors, currentColor, setCurrentColor }) => {

  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {colors.map((item) => (
          <li key={item}>
            <button
              type="button"
              className={clsx(
                prepareColorClassName(item),
                item === currentColor && styles.active
              )}
              onClick={() => setCurrentColor(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  prepareColorClassName: PropTypes.func.isRequired,
};

export default OptionColor;

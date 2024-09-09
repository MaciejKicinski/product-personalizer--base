import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {

    const handleClick = (event) => {
        event.preventDefault(); // Zatrzymuje domyślne zachowanie (wysyłanie formularza)
        
        // Wyświetlanie w konsoli podsumowania produktu
        console.log(`Product Name: ${props.name}`);
        console.log(`Final Price: ${props.basePrice}`);
        console.log(`Selected Colors: ${props.color}`);
        console.log(`Selected Sizes: ${props.size}`);
      };


      return (
        <button
          className={clsx(styles.button, props.className)}
          onClick={handleClick} // Podłączenie obsługi zdarzenia
        >
          {props.children}
        </button>
      );};

export default Button;
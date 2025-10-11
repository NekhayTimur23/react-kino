import styles from './Iinput.module.css';
import cn from 'classnames';

function Iinput ({ placeholder ,onChange, props}) {
	return (
		<input 
			{...props}
			onChange={onChange}
			className={cn(styles['input'])}
			placeholder={placeholder}
		/>
	);
}


export default Iinput;

// placeholder="Введите название"
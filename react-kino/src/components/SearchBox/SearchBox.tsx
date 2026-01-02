import styles from './SearchBox.module.css';
import { SearchBoxProps } from './SearchBox.props';

function SearchBox({children}:SearchBoxProps) {
	
	return (
		<div className={styles['search-box']}>
			{children}
		</div>
	);
}

export default SearchBox;
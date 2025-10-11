import styles from './SearchBox.module.css';

function SearchBox({children}) {
	
	return (
		<div className={styles['search-box']}>
			{children}
		</div>
	);
}

export default SearchBox;
import styles from  './NavLeftSection.module.css';


function NavLeftSection () {
	
	return (
		<div className={styles['nav-section_left']}>
			<img className={styles['nav-section_logo']} src="/Bookmark.svg" alt="logo" />
		</div>
	);
}

export default NavLeftSection;
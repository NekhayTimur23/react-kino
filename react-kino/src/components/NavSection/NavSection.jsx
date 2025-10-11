import styles from './NavSection.module.css';


function NavSection ({children}) {
	
	return (
		<div className={styles['nav-section']}>
			{children}
		</div>
	);
}

export default NavSection;
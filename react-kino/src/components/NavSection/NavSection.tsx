import styles from './NavSection.module.css';
import { NavSectionProps } from './NavSection.props';


function NavSection ({children}:NavSectionProps) {
	
	return (
		<div className={styles['nav-section']}>
			{children}
		</div>
	);
}

export default NavSection;
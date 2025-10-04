import styles from './NavRightSection.module.css';
import NavMenu from '../NavMenu/NavMenu';


function NavRightSection () {
	
	return (
		<div className={styles['nav-section_right']}>
			<NavMenu>

			</NavMenu>
		</div>
	);
}

export default NavRightSection;
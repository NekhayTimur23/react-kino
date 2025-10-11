import styles from './NavRightSection.module.css';
import NavMenu from '../NavMenu/NavMenu';


function NavRightSection ({loginState, exitAccount}) {
	
	return (
		<div className={styles['nav-section_right']}>
			<NavMenu 
				loginState={loginState}
				exitAccount={exitAccount}
			/>
		</div>
	);
}

export default NavRightSection;
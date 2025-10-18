import styles from './NavMenu.module.css';
import { UserContext } from '../../context/user.context';
import { useContext } from 'react';



function NavMenu ({ exitAccount}) {

	const {userAcc} = useContext(UserContext);
	
	return (
		<div className={styles['nav-menu']}>
			<ul className={styles['nav-menu_list']}>
				<li><a href='#'>Поиск фильмов</a></li>
				<li><a href='#'>Мои фильмы</a></li>
				{userAcc.isLogined && <li ><a href='#'>{userAcc.name}</a></li>}
				<li onClick={exitAccount}>
					<a href='#'>{ userAcc.isLogined ? 'Выйти' : 'Войти' }
						<img src='/exit.svg'/>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default NavMenu;
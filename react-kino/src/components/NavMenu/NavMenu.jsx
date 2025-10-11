import styles from './NavMenu.module.css';



function NavMenu ({loginState, exitAccount}) {

	const {name, checkenLog} = loginState;
	
	return (
		<div className={styles['nav-menu']}>
			<ul className={styles['nav-menu_list']}>
				<li><a href='#'>Поиск фильмов</a></li>
				<li><a href='#'>Мои фильмы</a></li>
				{checkenLog && <li ><a href='#'>{name}</a></li>}
				<li onClick={exitAccount}>
					<a href='#'>{ checkenLog ? 'Выйти' : 'Войти' }
                         
						<img src='/exit.svg'/>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default NavMenu;
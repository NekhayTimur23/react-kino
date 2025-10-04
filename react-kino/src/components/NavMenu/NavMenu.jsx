import styles from './NavMenu.module.css';


function NavMenu () {
	
	return (
		<div className={styles['nav-menu']}>
			<ul className={styles['nav-menu_list']}>
				<li><a href='#'>Поиск фильмов</a></li>
				<li><a href='#'>Мои фильмы</a></li>
				<li>
					<a href='#'>
                        Войти 
						<img src='/exit.svg'/>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default NavMenu;
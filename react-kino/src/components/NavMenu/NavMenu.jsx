import './NavMenu.css';


function NavMenu () {
	
	return (
		<div className='nav-menu'>
			<ul className='nav-menu_list'>
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
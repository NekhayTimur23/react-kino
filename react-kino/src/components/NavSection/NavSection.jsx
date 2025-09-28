import './NavSection.css';


function NavSection ({children}) {
	
	return (
		<div className='nav-section'>
			{children}
		</div>
	);
}

export default NavSection;
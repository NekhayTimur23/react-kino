import './SearchBox.css';

function SearchBox({children}) {
	
	return (
		<div className='search-box'>
			{children}
		</div>
	);
}

export default SearchBox;
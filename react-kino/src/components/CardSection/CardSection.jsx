import './CardSection.css';

function CardSection({children}) {
	
	return (
		<div className='card-section'>
			{children}
		</div>
	);
}

export default CardSection;
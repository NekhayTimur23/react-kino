import './CardItems.css';

function CardItems({title, favorites, alt , src}) {
	
	return (
		<>
			<div className='favorites'>
				<img src="/public/favorite.svg" alt="favorite" /> 
				{favorites}
			</div>
			<div className='movie-poster'>
				<img className='movie-poster_img' src={src} alt={alt} />
			</div>
			<div className='description'>
				<p className='description_title'>{title}</p>
				<div className='button-favotire'>
					<img className='button-favotire_img' src='/public/like.svg' alt='like'/>
					<button className='button-favotire_button'>
					в избраное
					</button>
				</div>
				
			</div>
		</>
	);
}

export default CardItems;

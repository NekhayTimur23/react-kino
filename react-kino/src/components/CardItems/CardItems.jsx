import styles from './CardItems.module.css';

function CardItems({title, favorites, alt , src}) {
	
	return (
		<>
			<div className={styles['favorites']}>
				<img src="/public/favorite.svg" alt="favorite" /> 
				{favorites}
			</div>
			<div className={styles['movie-poster']}>
				<img className={styles['movie-poster_img']} src={src} alt={alt} />
			</div>
			<div className={styles['description']}>
				<p className={styles['description_title']}>{title}</p>
				<div className={styles['button-favotire']}>
					<img className={styles['button-favotire_img']} src='/public/like.svg' alt='like'/>
					<button className={styles['button-favotire_button']}>
					в избраное
					</button>
				</div>
				
			</div>
		</>
	);
}

export default CardItems;

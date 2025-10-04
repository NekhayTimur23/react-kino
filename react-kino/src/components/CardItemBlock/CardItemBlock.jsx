import styles from './CardItemBlock.module.css';

function CardItemBlock({children}) {
	
	return (
		<div className={styles['card-itemb_block']}>
			{children}
		</div>
	);
}

export default CardItemBlock;

import styles from './Authorization.module.css';
import cn from 'classnames';
import Title from '../Title/Title';
import Input from '../Input/Iinput';
import Button from '../Button/Button';

function Authorization({inputRef, checkenLog, onChangeFn, inputFormFn, loginState}) {
	return (
		<div className={cn(styles['authorization'], {
			[styles['dispNone']]: checkenLog
		})}>
			<Title title='Войти'/>
			<Input 
				value={loginState.value}
				onChange={onChangeFn}
				ref={inputRef}
				type="text"
				placeholder="Ваше имя"
			/>
			<Button onClick={inputFormFn} text={'Войти в профиль'}/>
		</div>
	);
}

export default Authorization;
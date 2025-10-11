import styles from './InputSearchForm.module.css';
import Button from '../Button/Button';
import Input from '../Input/Iinput';
import { useState } from 'react';


function InputSearchForm () {

	const [inputData, setInputData] = useState('');

	const inputChange = (e) => {
		setInputData(e.target.value);
	};

	const formSubmit = (e) => {
		e.preventDefault();
		
	};
	
	return (
		<>
			<form className={styles['input-form']} onSubmit={formSubmit} >
				<Input 
					type="text" 
					onChange={inputChange} 
					value={inputData} 
					placeholder="Введите название"
				/>
				<Button text={'Искать'}/>
			</form>
		</>
	);
}

export default InputSearchForm;
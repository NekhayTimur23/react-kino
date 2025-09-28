import './InputSearchForm.css';
import Button from '../Button/Button';
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
			<form className='input-form' onSubmit={formSubmit} >
				<input type="text" onChange={inputChange} value={inputData} placeholder="Введите название"></input>
				<Button text={'Искать'}/>
			</form>
		</>
	);
}

export default InputSearchForm;
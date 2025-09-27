
import './App.css';
import Title from './components/Title/Title';
import Paragraph from './components/Paragraph/Paragraph';
import Button from './components/Button/Button';
import Input from './components/Input/input';

function App() {

	return (
		<>
			<div className="header">
				<Title/>
				<Paragraph/>
				<div className='search-box'>
					<Input/>
					<Button/>
				</div>
			</div>
		</>
	);
}

export default App;

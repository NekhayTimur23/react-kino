
import './App.css';

import NavSection from './components/NavSection/NavSection';
import NavLeftSection from './components/NavLeftSection/NavLeftSection';
import NavRightSection from './components/NavRightSection/NavRightSection';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import Paragraph from './components/Paragraph/Paragraph';
import SearchBox from './components/SearchBox/SearchBox';
import InputSearchForm from './components/InputSearchForm/InputSearchForm';



function App() {

	return (
		<div className='app'>
			<NavSection>
				<NavLeftSection/>
				<NavRightSection/>
			</NavSection>
			<Header>
				<Title/>
				<Paragraph/>
				<SearchBox>
					<InputSearchForm/>
				</SearchBox>
			</Header>
		</div>
	);
}

export default App;

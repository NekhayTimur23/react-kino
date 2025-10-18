
import styles from './App.module.css';


import NavSection from './components/NavSection/NavSection';
import NavLeftSection from './components/NavLeftSection/NavLeftSection';
import NavRightSection from './components/NavRightSection/NavRightSection';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import Paragraph from './components/Paragraph/Paragraph';
import SearchBox from './components/SearchBox/SearchBox';
import InputSearchForm from './components/InputSearchForm/InputSearchForm';
import CardSection from './components/CardSection/CardSection';
import CardItemBlock from './components/CardItemBlock/CardItemBlock';
import CardItems from './components/CardItems/CardItems';
import Authorization from './components/Authorization/Authorization';
import { CARD_ARR, loginReducer, PEREMENAY } from './App.state';
import { useReducer, useRef, useContext } from 'react';
import { UserContext } from './context/user.context';


function App() {

	const {userAcc, toggleUserAcc} = useContext(UserContext);

	const [loginState, dispatchLogin] = useReducer(loginReducer, PEREMENAY);
	const {value, checkenLog} = loginState;
	
	const inputRef = useRef();
	
		
	const exitAccount = () => {
		if (checkenLog) {
			dispatchLogin({type: 'EXIT_ACCOUNT'});
			toggleUserAcc(false);
		}
	};

	const onChangeFn = (e) => {
		dispatchLogin({type: 'SET_VALUE', payload: e.target.value});
	};
	
	const inputFormFn = () => {
		if (value === userAcc.name) {
			dispatchLogin({type: 'SET_LOGIN', payload: userAcc});
			dispatchLogin({type: 'CHECK_LOGIN'});
			toggleUserAcc(value);
		}
	};

	return (
		<div className={styles['app']}>
			<NavSection>
				<NavLeftSection />
				<NavRightSection 
					loginState={loginState}
					exitAccount={exitAccount}
				/>
			</NavSection>
			<Authorization 
				inputRef={inputRef}
				checkenLog={checkenLog}
				onChangeFn={onChangeFn}
				inputFormFn={inputFormFn}
				loginState={loginState}
			/>
			<Header>
				<Title title="Поиск"/>
				<Paragraph/>
				<SearchBox>
					<InputSearchForm/>
				</SearchBox>
			</Header>
			<CardSection>
				{CARD_ARR.length === 0 
					?
					<p>Список фильмов пуст</p>
					:
				 CARD_ARR.map(e => (
						<CardItemBlock key={e.id}>
							<CardItems
								title={e.title}
								favorites={e.favorites}
								alt={e.poster.alt}
								src={e.poster.src}
							/>
						</CardItemBlock>
					))}
			</CardSection>
		</div>
	);
}

export default App;

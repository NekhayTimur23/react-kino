
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
import { CARD_ARR } from './App.state';
import { useRef, useEffect, useContext, useState } from 'react';
import { UserContext } from './context/user.context';



function App() {

	const {userAcc, toggleUserAcc} = useContext(UserContext);
	const [value, setValue] = useState('');
	const inputRef = useRef();
	
	useEffect(() => {
		localStorage.setItem('logined', JSON.stringify({name: 'Тимур', isLogined: false}));
	}, []);
	
	// ФУНКЦИЯ ВВОДА значений в переменную
	const onChangeFn = (e) => {
		setValue(e.target.value);
	};
	

	// ФУНКЦИЯ ОТПРАВКИ: вставляет полученые значения в переменные и проверяет значения с именем пользователя.
	const inputFormFn = () => {
		if (value === userAcc.name) {
			toggleUserAcc(value);
			console.log(value);
		}
		
	};
	
	// ФУНКЦИЯ ВЫХОДА: проверяет валидность логина,выходит из акк, меняет значения контекста на false и отправляет значения в localStorage
	const exitAccount = () => {
		if (userAcc.isLogined) {
			toggleUserAcc('');

		}
	};

	return (
		<div className={styles['app']}>
			<NavSection>
				<NavLeftSection />
				<NavRightSection 
					loginState={userAcc.name}
					exitAccount={exitAccount}
				/>
			</NavSection>
			<Authorization 
				inputRef={inputRef}
				isLogined={userAcc.isLogined}
				onChangeFn={onChangeFn}
				inputFormFn={inputFormFn}
				loginState={userAcc.name}
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



// import styles from './App.module.css';


// import NavSection from './components/NavSection/NavSection';
// import NavLeftSection from './components/NavLeftSection/NavLeftSection';
// import NavRightSection from './components/NavRightSection/NavRightSection';
// import Header from './components/Header/Header';
// import Title from './components/Title/Title';
// import Paragraph from './components/Paragraph/Paragraph';
// import SearchBox from './components/SearchBox/SearchBox';
// import InputSearchForm from './components/InputSearchForm/InputSearchForm';
// import CardSection from './components/CardSection/CardSection';
// import CardItemBlock from './components/CardItemBlock/CardItemBlock';
// import CardItems from './components/CardItems/CardItems';
// import Authorization from './components/Authorization/Authorization';
// import { CARD_ARR, loginReducer, PEREMENAY } from './App.state';
// import { useReducer, useRef, useEffect, useContext } from 'react';
// import { UserContext } from './context/user.context';



// function App() {

// 	const {userAcc, toggleUserAcc} = useContext(UserContext);


// 	const [loginState, dispatchLogin] = useReducer(loginReducer, PEREMENAY);
// 	const {value, isLogined} = loginState;
	
// 	const inputRef = useRef();
	
// 	useEffect(() => {
// 		localStorage.setItem('logined', JSON.stringify({name: 'Тимур', isLogined: false}));
// 	}, []);
	
// 	// ФУНКЦИЯ ВВОДА значений в переменную
// 	const onChangeFn = (e) => {
// 		dispatchLogin({type: 'SET_VALUE', payload: e.target.value});
// 	};
	

// 	// ФУНКЦИЯ ОТПРАВКИ: вставляет полученые значения в переменные и проверяет значения с именем пользователя.
// 	const inputFormFn = () => {
// 		if (value === userAcc.name) {
// 			dispatchLogin({type: 'SET_LOGIN', payload: userAcc});
// 			dispatchLogin({type: 'CHECK_LOGIN'});
// 			toggleUserAcc(value);
// 			console.log(value);
// 		}
		
// 	};
	
// 	// ФУНКЦИЯ ВЫХОДА: проверяет валидность логина,выходит из акк, меняет значения контекста на false и отправляет значения в localStorage
// 	const exitAccount = () => {
// 		if (userAcc.isLogined) {
// 			dispatchLogin({type: 'EXIT_ACCOUNT'});
// 			toggleUserAcc('');

// 		}
// 	};
	
	

// 	return (
// 		<div className={styles['app']}>
// 			<NavSection>
// 				<NavLeftSection />
// 				<NavRightSection 
// 					loginState={loginState}
// 					exitAccount={exitAccount}
// 				/>
// 			</NavSection>
// 			<Authorization 
// 				inputRef={inputRef}
// 				isLogined={isLogined}
// 				onChangeFn={onChangeFn}
// 				inputFormFn={inputFormFn}
// 				loginState={loginState}
// 			/>
// 			<Header>
// 				<Title title="Поиск"/>
// 				<Paragraph/>
// 				<SearchBox>
// 					<InputSearchForm/>
// 				</SearchBox>
// 			</Header>
// 			<CardSection>
// 				{CARD_ARR.length === 0 
// 					?
// 					<p>Список фильмов пуст</p>
// 					:
// 				 CARD_ARR.map(e => (
// 						<CardItemBlock key={e.id}>
// 							<CardItems
// 								title={e.title}
// 								favorites={e.favorites}
// 								alt={e.poster.alt}
// 								src={e.poster.src}
// 							/>
// 						</CardItemBlock>
// 					))}
// 			</CardSection>
// 		</div>
// 	);
// }

// export default App;
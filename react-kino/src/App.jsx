
import './App.css';

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
// import { useState } from 'react';


const CARD_ARR = [
	{
		title: 'Black Widow',
		favorites: '324',
		poster: {
			src: '/public/BlackWidow.png',
			alt: 'BlackWidow'
		},
		id: 1
	},
	{
		title: 'ShangChi',
		favorites: '124',
		poster: {
			src: '/public/ShangChi.png',
			alt: 'ShangChi'
		},
		id: 2
	},
	{
		title: 'Loki',
		favorites: '235',
		poster: {
			src: '/public/Loki.png',
			alt: 'Loki'
		},
		id: 3
	},
	{
		title: 'How I Met Your Mother',
		favorites: '324',
		poster: {
			src: '/public/HowIMetYourMother.png',
			alt: 'HowIMetYourMother'
		},
		id: 4
	},
	{
		title: 'Money Heist',
		favorites: '8125',
		poster: {
			src: '/public/MoneyHeist.png',
			alt: 'MoneyHeist'
		},
		id: 5
	},
	{
		title: 'Friends',
		favorites: '123',
		poster: {
			src: '/public/Friends.png',
			alt: 'Friends'
		},
		id: 6
	},
	{
		title: 'The Big Bang Theory',
		favorites: '12',
		poster: {
			src: '/public/TheBigBangTheory.png',
			alt: 'TheBigBangTheory'
		},
		id: 7
	},
	{
		title: 'Two And a Half Men',
		favorites: '456',
		poster: {
			src: '/public/TwoAndaHalfMen.png',
			alt: 'TwoAndaHalfMen'
		},
		id: 8
	}
];



function App() {

	// const [cardItem, setCardItem] = useState;

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
			<CardSection>
				{CARD_ARR.length === 0 
					?
					<p>Список фильмов пуст!</p>
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

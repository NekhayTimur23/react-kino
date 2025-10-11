export const CARD_ARR = [
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

export const PEREMENAY = {
	name : '',
	isLogined : false,
	value: '',
	checkenLog: false
};


export function loginReducer(state, action) {
	switch(action.type) {
	case 'SET_LOGIN' :
		return {...state, ...action.payload};

	case 'SET_VALUE' :
		return { ...state, value: action.payload};

	case 'CHECK_LOGIN' :
		return { ...state, checkenLog: state.name == state.value };
	case 'EXIT_ACCOUNT' :
		return { ...state, checkenLog: false };
	case 'CLEAR' :
		return { ...state, value: PEREMENAY.value };
	}
	
};
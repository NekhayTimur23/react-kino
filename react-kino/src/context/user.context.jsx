import { createContext, useState, useEffect } from 'react';
 
export const UserContext = createContext();

export const UserProvider = ({children}) => {
	const [userAcc, setUserAcc ] = useState(() => {
		const dateLocalStorage = localStorage.getItem('logined');
		return dateLocalStorage ? JSON.parse(dateLocalStorage) : {name: 'Тимур', isLogined: false };
	}); 

	useEffect(() => {
		localStorage.setItem('logined', JSON.stringify(userAcc));
	}, [userAcc]);
	
	const  toggleUserAcc = (userName) => {
		setUserAcc((state) => ({
			...state,
			isLogined: state.name === userName
		}));
	};
	

	return <UserContext.Provider value={{userAcc, toggleUserAcc}}>
		{children}
	</UserContext.Provider>;
};
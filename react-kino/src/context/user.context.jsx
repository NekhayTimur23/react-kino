import { createContext, useState } from 'react';
 
export const UserContext = createContext();

export const UserProvider = ({children}) => {
	const [userAcc, setUserAcc ] = useState({name: 'Тимур', isLogined: false }); 

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
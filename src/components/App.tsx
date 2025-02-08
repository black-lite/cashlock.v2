import {useEffect, useState} from "react";

import {Header} from "./Header/Header";
import {SwitchState} from "./Subheader/Subheader";
import {MainContent} from "./MainContent/MainContent";

interface IRoutesType {
	expanses: string,
	revenues: string,
	categories: string,
}

export let routesPath: IRoutesType;

const App = () => {


	const [items, setItems] = useState([]);
	const [cash, setCash] = useState(0);

	useEffect(() =>
	{
		fetch('/xhr/?s=routes').then(async result => {
			routesPath = await result.json();
		});

		fetch('/xhr/?s=cash').then(async result => {
			setCash(await result.json());
		});
	});

	return (
		<div>
			<Header initSwitchState={SwitchState.expenses} onChangeState={(s) => console.log(s)} bankAccount={'0'} bankCash={'0'}/>
			<MainContent items={items}/>
		</div>
	);
};

export default App;
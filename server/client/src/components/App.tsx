import {Header} from "./Header/Header";
import {MainContent} from "./MainContent/MainContent";
import {useEffect, useState} from "react";

const App = () => {

	const [items, setItems] = useState([]);

	useEffect(() =>
	{

	});

	return (
		<div>
			<Header />
			<MainContent items={items}/>
		</div>
	);
};

export default App;
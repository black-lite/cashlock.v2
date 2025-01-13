import {useEffect, useState} from 'react';

import { Header } from "@/components/Header/Header";
import { MainContent } from "@/components/MainContent/MainContent";

import classesApp from './App.module.scss';

export const Main = () => {

	return (
		<div>
			<Header cls={'main'} text={'Главная'}/>
			<MainContent items={null}/>
		</div>
	);
};
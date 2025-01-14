import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import path from "path";

import {DBSequelize} from "./db";

const db = new DBSequelize();
db.connect().then(() => successConnectDB()).catch(e => { console.log(e); throw new Error('Ошибка подключения к БД!'); })

dotenv.config();
const PORT = process.env.PORT;

const successConnectDB = () =>
{
	const app = express();

	const routes = {
		cash: '/cash',
		expanses: '/expanses',
		revenues: '/revenues',
		categories: '/categories',
	}

	app.use('/', express.static(path.join(__dirname, 'client', 'build')));

	app.get('/', (request: Request, response: Response) =>
	{
		response.sendFile(path.resolve(__dirname, 'client/build/index.html'));
	});

	app.get('/routes', (request: Request, response: Response) =>
	{
		response.json(routes);
	});

	app.get(routes.cash, (request: Request, response: Response) =>
	{

		response.json(routes);
	});

	app.listen(PORT, runningServer).on('error', errorServer);
}

const runningServer = () => console.log('Server running at PORT: ', PORT);
const errorServer = (error: any) => { throw new Error(error.message); }
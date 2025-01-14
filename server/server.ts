import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import path from "path";

import {DBSequelize} from "./db";

const db = new DBSequelize();
db.connect(() => successConnectDB(), e => errorConnectDB(e))
dotenv.config();
const PORT = process.env.PORT;

const successConnectDB = () =>
{
	console.log('Вы успешно подключились к БД');

	const app = express();
	app.use('/', express.static(path.join(__dirname, 'client', 'build')));
	app.get('/expanses', (request, response) =>
	{
		response.json([{
			test: 'test'
		}])
	});

	app.get('/', (request, response) =>
	{
		response.sendFile(path.resolve(__dirname, 'client/build/index.html'));
	});

	app.listen(PORT, runningServer).on('error', errorServer);
}

const runningServer = () =>
{
	console.log('Server running at PORT: ', PORT);
}

const errorServer = (error: any) =>
{
	throw new Error(error.message);
}

const errorConnectDB = (e: any) =>
{
	throw new Error(e)
}
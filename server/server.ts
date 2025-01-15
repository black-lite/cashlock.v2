import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import path from "path";

import {DB} from "./db";

const creating = new DB();
const db = creating.getDB();

dotenv.config();
const PORT = process.env.PORT;

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
	const query = db.prepare('SELECT * FROM `bank_accounts` WHERE `id`=1 ');


	console.log(query.all())
	response.json(query.all());
});

app.listen(PORT, () => console.log('Server running at PORT: ', PORT)).on('error', (error) => { throw new Error(error.message) });
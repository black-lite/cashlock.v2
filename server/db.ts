import { Database } from 'sqlite3';

export class DB
{
	protected database: Database;

	constructor()
	{
		this.database = new Database('../db.sqbpro');
		console.log(this.database);
	}

	getDB() : Database
	{
		return this.database;
	}
}

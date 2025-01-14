import { Sequelize } from 'sequelize';

export class DBSequelize
{
	sequelize: Sequelize;

	constructor()
	{
		this.sequelize = new Sequelize({
			dialect: 'sqlite',
			storage: '../db.db'
		});
	}

	connect(success: () => void, error: (e: string) => void)
	{
		try
		{
			this.sequelize.authenticate().then(() =>
			{
				success();
			});
		}
		catch (e)
		{
			error(e);
			console.log('Невозможно выполнить подключение к БД: ', e);
		}
	}
}

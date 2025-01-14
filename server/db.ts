import Model, {DataTypes, ModelCtor, Sequelize} from 'sequelize';

export class DBSequelize
{
	sequelize: Sequelize;
	bankAccount: Model;

	constructor()
	{
		this.sequelize = new Sequelize({
			dialect: 'sqlite',
			storage: '../db.db'
		});

		this.defineModel();
	}

	connect(): Promise<void>
	{
		return new Promise<void>((resolve, reject) =>
		{
			try { this.sequelize.authenticate().then(() => resolve()); }
			catch (e) { reject(e); }
		})
	}

	defineModel()
	{
		this.bankAccount = this.sequelize.define(
			'bank_accounts', {
				id: {
					type: DataTypes.INTEGER
				},
				pid: {
					type: DataTypes.INTEGER
				},
				name: {
					type: DataTypes.STRING
				},
				cash: {
					type: DataTypes.REAL
				},
				unit: {
					type: DataTypes.SMALLINT
				},
				timecr: {
					type: DataTypes.DATE
				},
				timemd: {
					type: DataTypes.DATE
				},
			},
			{
				tableName: 'bank_accounts',
				createdAt: 'timecr',
				updatedAt: 'timemd',
			}
		);
	}
}

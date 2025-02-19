namespace Cashlock
{
	export type ParamsURLsType = {

	}

	export class Params
	{
		public url: ParamsURLsType;

		public constructor()
		{
			fetch('xhr/urls').then(r => r.json()).then(r =>
			{
				if (r) this.url = r;
				console.log(this.url);
			});
		}

		call(url: string, onSuccess: (data) => void, onError: (data) => void)
		{
			fetch(url).then(response =>
			{
				response.json().then(data =>
				{
					if (response.ok) onSuccess(data)
					else onError(data);
				});
			});
		}
	}
}

export const params = new Cashlock.Params();
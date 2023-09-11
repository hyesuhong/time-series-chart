import { useEffect, useState } from 'react';

interface Json<T> {
	type: string;
	version: number;
	response: T;
}

interface Data<T> {
	loading: boolean;
	data?: T;
	error?: Error;
}

const useFetch = <T>(url: string) => {
	const [response, setResponse] = useState<Data<T>>({ loading: false });

	const fetchData = async () => {
		setResponse({ loading: true });
		try {
			await fetch(url)
				.then((data) => {
					if (data.ok) {
						return data.json() as Promise<Json<T>>;
					} else {
						throw new Error(
							`error code: ${data.status}\nerror text: ${data.statusText}`
						);
					}
				})
				.then((json) => {
					setResponse((prev) => ({ ...prev, data: json.response }));
				});
		} catch (e) {
			console.error(e);
			setResponse((prev) => ({ ...prev, error: e as Error }));
		} finally {
			setResponse((prev) => ({ ...prev, loading: false }));
		}
	};

	useEffect(() => {
		fetchData();
	}, [url]);
	return response;
};

export default useFetch;

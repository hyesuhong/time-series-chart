import { useEffect, useState } from 'react';
import { errorType, getError } from '../utils/error';

interface Json<T> {
	type: string;
	version: number;
	response: T;
}

interface Data<T> {
	loading: boolean;
	data?: T;
	error?: errorType;
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
						const errorObj = {
							status: data.status,
							statusText: data.statusText,
						};
						throw new Error('Fetch Error', { cause: errorObj });
					}
				})
				.then((json) => {
					setResponse((prev) => ({ ...prev, data: json.response }));
				});
		} catch (e) {
			console.error(e);
			const error = getError(e);
			setResponse((prev) => ({ ...prev, error: error }));
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

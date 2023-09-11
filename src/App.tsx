import { useEffect } from 'react';
import useFetch from './hooks/useFetch';

interface Mock {
	[key: string]: {
		id: string;
		value_area: number;
		value_bar: number;
	};
}

function App() {
	const { loading, data, error } = useFetch<Mock>('./data/mock_data.json');
	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<>
			{loading && <p>loading</p>}
			{error && <p>error</p>}
			{data && <p>data</p>}
		</>
	);
}

export default App;

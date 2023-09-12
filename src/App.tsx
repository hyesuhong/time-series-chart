import useFetch from './hooks/useFetch';
import Chart from './components/Chart';
import { MockObj, MockData } from './types/data';
import { useEffect } from 'react';
import { getCategory } from './utils/category';

function App() {
	const { loading, data, error } = useFetch<MockObj>('./data/mock_data.json');
	const category = getCategory<MockData>((value) => value.id, data, true);

	useEffect(() => {
		console.log(category);
	}, [category]);

	return (
		<>
			{loading && <p>loading</p>}
			{error && <p>error</p>}
			{data && (
				<>
					<Chart data={data} />
				</>
			)}
		</>
	);
}

export default App;

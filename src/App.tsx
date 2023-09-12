import useFetch from './hooks/useFetch';
import Chart from './components/Chart';
import { MockObj, MockData } from './types/data';
import { getCategory } from './utils/category';

function App() {
	const { loading, data, error } = useFetch<MockObj>('./data/mock_data.json');
	const category = getCategory<MockData>((value) => value.id, data);

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

import useFetch from './hooks/useFetch';
import Chart, { Mock } from './components/Chart';

function App() {
	const { loading, data, error } = useFetch<Mock>('./data/mock_data.json');

	return (
		<>
			{loading && <p>loading</p>}
			{error && <p>error</p>}
			{data && <Chart data={data} />}
		</>
	);
}

export default App;

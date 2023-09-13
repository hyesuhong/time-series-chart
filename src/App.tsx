import useFetch from './hooks/useFetch';
import Chart from './components/Chart';
import { MockObj, MockData } from './types/data';
import { getCategory } from './utils/category';
import Category from './components/Category';
import CategoryProvider from './contexts/categoryContext';

function App() {
	const { loading, data, error } = useFetch<MockObj>('./data/mock_data.json');
	const category = getCategory<MockData>((value) => value.id, data);

	return (
		<>
			{loading && <p>loading</p>}
			{error && <p>error</p>}
			{data && (
				<CategoryProvider initialCategory={category}>
					<Category />
					<Chart data={data} />
				</CategoryProvider>
			)}
		</>
	);
}

export default App;

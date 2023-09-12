import { useState } from 'react';
import useFetch from './hooks/useFetch';
import Chart from './components/Chart';
import { MockObj, MockData } from './types/data';
import { getCategory } from './utils/category';
import Category from './components/Category';

function App() {
	const { loading, data, error } = useFetch<MockObj>('./data/mock_data.json');
	const category = getCategory<MockData>((value) => value.id, data);
	const [currentCategory, setCurrentCategory] = useState('');

	const changeCategory = (value: string) => setCurrentCategory(value);
	const resetCategory = () => setCurrentCategory('');

	return (
		<>
			{loading && <p>loading</p>}
			{error && <p>error</p>}
			{data && (
				<>
					<Category
						list={category}
						currentItem={currentCategory}
						changeItem={changeCategory}
						resetItem={resetCategory}
					/>
					<Chart
						data={data}
						currentItem={currentCategory}
						changeItem={changeCategory}
					/>
				</>
			)}
		</>
	);
}

export default App;

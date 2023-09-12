import useFetch from './hooks/useFetch';
import Chart from './components/Chart';
import { MockObj, MockData } from './types/data';
import { getCategory } from './utils/category';
import Category from './components/Category';
import { useEffect, useState } from 'react';

function App() {
	const { loading, data, error } = useFetch<MockObj>('./data/mock_data.json');
	const category = getCategory<MockData>((value) => value.id, data);
	const [currentCategory, setCurrentCategory] = useState('');

	const changeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setCurrentCategory(value);
	};

	const resetCategory = () => {
		setCurrentCategory('');
	};

	useEffect(() => {
		console.info(currentCategory);
	}, [currentCategory]);

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
					<Chart data={data} />
				</>
			)}
		</>
	);
}

export default App;

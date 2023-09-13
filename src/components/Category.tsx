import { ChangeEvent } from 'react';
import { useCategory, useCategoryDispatch } from '../contexts/categoryContext';

const Category = () => {
	const { categories, current } = useCategory();
	const categoryDispatch = useCategoryDispatch();

	const changeCategory = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		if (!categoryDispatch) {
			return;
		}
		categoryDispatch({ type: 'CHANGE', selected: value });
	};

	const resetCategory = () => {
		categoryDispatch && categoryDispatch({ type: 'RESET' });
	};

	return (
		<>
			<ul>
				{categories.map((item, index) => (
					<li key={index}>
						<input
							type='radio'
							name='category'
							value={item}
							id={`category_${index}`}
							checked={item === current}
							onChange={changeCategory}
						/>
						<label htmlFor={`category_${index}`}>{item}</label>
					</li>
				))}
			</ul>
			<button onClick={resetCategory}>초기화</button>
		</>
	);
};

export default Category;

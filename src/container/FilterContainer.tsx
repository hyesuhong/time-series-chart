import { ChangeEvent } from 'react';
import { useCategory, useCategoryDispatch } from '../contexts/categoryContext';
import CategoryRadio from '../components/Filter/CategoryRadio';
import ResetBtn from '../components/Filter/ResetBtn';

const FilterContainer = () => {
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
						<CategoryRadio
							categoryValue={item}
							name='category'
							checked={item === current}
							onChange={changeCategory}
						/>
					</li>
				))}
			</ul>
			<ResetBtn onClick={resetCategory}>초기화</ResetBtn>
		</>
	);
};

export default FilterContainer;

import { ChangeEvent } from 'react';

interface Props {
	list: string[];
	currentItem: string;
	changeItem: (value: string) => void;
	resetItem: () => void;
}

const Category = ({ list, currentItem, changeItem, resetItem }: Props) => {
	const changeCategory = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		changeItem(value);
	};

	return (
		<>
			<ul>
				{list.map((item, index) => (
					<li key={index}>
						<input
							type='radio'
							name='category'
							value={item}
							id={`category_${index}`}
							checked={item === currentItem}
							onChange={changeCategory}
						/>
						<label htmlFor={`category_${index}`}>{item}</label>
					</li>
				))}
			</ul>
			<button onClick={resetItem}>초기화</button>
		</>
	);
};

export default Category;

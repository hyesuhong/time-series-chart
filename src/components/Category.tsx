import { ChangeEvent } from 'react';

interface Props {
	list: string[];
	currentItem: string;
	changeItem: (event: ChangeEvent<HTMLInputElement>) => void;
	resetItem: () => void;
}

const Category = ({ list, currentItem, changeItem, resetItem }: Props) => {
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
							onChange={changeItem}
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

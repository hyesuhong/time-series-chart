import { ChangeEvent } from 'react';
import styled from 'styled-components';
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
		<Wrapper>
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
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: flex;
	align-items: ceter;
	justify-content: center;

	max-width: 1200px;
	margin: 20px auto;
	padding: 20px;
	border-radius: 6px;

	background: #fff;
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.05);

	ul {
		display: flex;
		gap: 10px;
		margin-right: 20px;

		input {
			display: none;
		}

		input + label {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 80px;
			height: 36px;
			border-radius: 4px;

			font-size: 14px;

			background: #fff;
			border: 1px solid #bbbbbb;

			cursor: pointer;

			&:hover {
				border-color: #dddddd;
			}
		}

		input:checked + label {
			background: #233883;
			border-color: #233883;
			color: #fff;
		}
	}

	button {
		width: 80px;
		height: 36px;
		border-radius: 4px;

		font-size: 14px;

		background: #fff;
		border: 1px solid #bbbbbb;

		&:hover {
			border-color: #dddddd;
		}

		&:active {
			border-color: #aaa;
			background: #f4f4f4;
		}
	}
`;

export default FilterContainer;

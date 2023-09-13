import { AllHTMLAttributes, useId } from 'react';

interface categoryRadio extends AllHTMLAttributes<HTMLInputElement> {
	categoryValue: string;
}

const CategoryRadio = ({ categoryValue, ...props }: categoryRadio) => {
	const id = useId();
	return (
		<>
			<input type='radio' id={id} value={categoryValue} {...props} />
			<label htmlFor={id}>{categoryValue}</label>
		</>
	);
};

export default CategoryRadio;

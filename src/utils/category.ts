import { Obj } from '../types/data';

export const getCategory = <T, F>(
	data?: Obj<T>,
	filteringFn?: (value: T) => F
) => {
	if (!(data && filteringFn)) {
		return [];
	}

	const category = Object.keys(data).reduce<F[]>((acc, cur) => {
		const target = filteringFn(data[cur]);
		const firstTargetIndex = acc.findIndex((item) => item === target);
		if (firstTargetIndex >= 0) {
			return acc;
		}

		acc.push(target);

		return acc;
	}, []);

	return category;
};

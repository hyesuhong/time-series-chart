import { Obj } from '../types/data';

type GetCategory = {
	<T>(
		filteringFn: (value: T) => string,
		data?: Obj<T>,
		useAll?: boolean
	): string[];
};

export const getCategory: GetCategory = (
	filteringFn,
	data = {},
	useAll = true
) => {
	const initialList = useAll ? ['전체'] : [];
	const category = Object.keys(data).reduce<string[]>((acc, cur) => {
		const target = filteringFn(data[cur]);
		const firstTargetIndex = acc.findIndex((item) => item === target);
		if (firstTargetIndex >= 0) {
			return acc;
		}

		acc.push(target);

		return acc;
	}, initialList);

	return category;
};

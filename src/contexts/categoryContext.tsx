import {
	Dispatch,
	ReactNode,
	Reducer,
	createContext,
	useContext,
	useReducer,
} from 'react';

type categoryObj = {
	categories: string[];
	current: string;
};
export type reducerAction = 'RESET' | 'CHANGE';
type actionObj = { type: reducerAction; selected?: string };

interface categoryProvider {
	initialCategory: string[];
	children?: ReactNode;
}

const initialCategoryState = {
	categories: [],
	current: '',
};

const categoryContext = createContext<categoryObj>(initialCategoryState);
const categoryDispatchContext = createContext<null | Dispatch<actionObj>>(null);

export function useCategory() {
	return useContext(categoryContext);
}

export function useCategoryDispatch() {
	return useContext(categoryDispatchContext);
}

const CategoryProvider = ({ initialCategory, children }: categoryProvider) => {
	const [categoryState, dispatch] = useReducer(categoryReducer, {
		...initialCategoryState,
		categories: initialCategory,
	});
	return (
		<categoryContext.Provider value={categoryState}>
			<categoryDispatchContext.Provider value={dispatch}>
				{children}
			</categoryDispatchContext.Provider>
		</categoryContext.Provider>
	);
};

const categoryReducer: Reducer<categoryObj, actionObj> = (
	prevState,
	action
) => {
	switch (action.type) {
		case 'RESET':
			return { ...prevState, current: '' };
		case 'CHANGE':
			return action.selected
				? { ...prevState, current: action.selected }
				: prevState;
	}
	throw Error('Unknown Action Type');
};

export default CategoryProvider;

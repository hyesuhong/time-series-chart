import useFetch from './hooks/useFetch';
import { MockObj, MockData } from './types/data';
import { getCategory } from './utils/category';
import CategoryProvider from './contexts/categoryContext';
import FilterContainer from './container/FilterContainer';
import ChartContainer from './container/ChartContainer';
import GlobalStyle from './styles/Global.styled';
import Loading from './components/common/Loading';
import ErrorScreen from './components/common/ErrorScreen';

function App() {
	const { loading, data, error } = useFetch<MockObj>('./data/mock_data.json');
	const category = getCategory<MockData>((value) => value.id, data);

	return (
		<>
			<GlobalStyle />
			{loading && <Loading />}
			{error && <ErrorScreen {...error} />}
			{data && (
				<CategoryProvider initialCategory={category}>
					<FilterContainer />
					<ChartContainer data={data} />
				</CategoryProvider>
			)}
		</>
	);
}

export default App;

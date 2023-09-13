import { CategoricalChartFunc } from 'recharts/types/chart/generateCategoricalChart';
import Chart from '../components/Chart';
import { useCategory, useCategoryDispatch } from '../contexts/categoryContext';
import { MockObj } from '../types/data';

interface chart {
	data: MockObj;
}

const ChartContainer = ({ data }: chart) => {
	const { current } = useCategory();
	const categoryDispatch = useCategoryDispatch();

	const chartData = Object.keys(data).map((d) => ({ date: d, ...data[d] }));

	const clickChart: CategoricalChartFunc = (props) => {
		if (!(props.activePayload && categoryDispatch)) {
			return;
		}

		const { id } = props.activePayload[0].payload;
		categoryDispatch && categoryDispatch({ type: 'CHANGE', selected: id });
	};

	return (
		<>
			<Chart
				data={chartData}
				currentItem={current}
				chartAreaClick={clickChart}
			/>
		</>
	);
};

export default ChartContainer;

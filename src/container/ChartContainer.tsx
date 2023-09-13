import { CategoricalChartFunc } from 'recharts/types/chart/generateCategoricalChart';
import styled from 'styled-components';
import Chart from '../components/Chart/Chart';
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
		if (!(props && props.activePayload && categoryDispatch)) {
			return;
		}

		const { id } = props.activePayload[0].payload;
		categoryDispatch && categoryDispatch({ type: 'CHANGE', selected: id });
	};

	return (
		<Wrapper>
			<Chart
				data={chartData}
				currentItem={current}
				chartAreaClick={clickChart}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
	border-radius: 6px;

	background: #fff;
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.05);
`;

export default ChartContainer;

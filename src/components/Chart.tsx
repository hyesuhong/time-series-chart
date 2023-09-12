import {
	Area,
	Bar,
	Cell,
	ComposedChart,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { CategoricalChartFunc } from 'recharts/types/chart/generateCategoricalChart';
import CustomTooltip from './Tooltip';
import { MockObj } from '../types/data';

interface Chart {
	data: MockObj;
	currentItem: string;
	changeItem: (value: string) => void;
}

const Chart = ({ data, currentItem, changeItem }: Chart) => {
	const chartData = Object.keys(data).map((d) => ({ date: d, ...data[d] }));

	const clickChart: CategoricalChartFunc = (props) => {
		if (!props.activePayload) {
			return;
		}

		const { id } = props.activePayload[0].payload;
		changeItem(id);
	};

	return (
		<>
			<ResponsiveContainer width='100%' height={500}>
				<ComposedChart data={chartData} onClick={clickChart}>
					<XAxis dataKey='date' padding={{ left: 30, right: 30 }} />
					<YAxis
						dataKey='value_bar'
						orientation='right'
						label={{ value: 'Bar', angle: 90, position: 'insideRight' }}
						yAxisId='1'
						domain={['auto', 'dataMax + 100']}
					/>
					<YAxis
						dataKey='value_area'
						orientation='left'
						label={{ value: 'Area', angle: -90, position: 'insideLeft' }}
						yAxisId='0'
						domain={['auto', 'dataMax + 100']}
					/>
					<Tooltip content={<CustomTooltip />} />
					<Legend />
					<Bar dataKey='value_bar' barSize={10} yAxisId={1} fill='#A3D6EC'>
						{chartData.map((data, index) => (
							<Cell
								key={`cell_${index}`}
								fill={data.id === currentItem ? '#21B2E4' : '#A3D6EC'}
							/>
						))}
					</Bar>
					<Area
						type='monotone'
						dataKey='value_area'
						fill='#76D467'
						stroke='#76D467'
					/>
				</ComposedChart>
			</ResponsiveContainer>
		</>
	);
};

export default Chart;

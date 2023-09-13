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

interface Chart {
	data: {
		id: string;
		value_area: number;
		value_bar: number;
		date: string;
	}[];
	currentItem?: string;
	chartAreaClick?: CategoricalChartFunc;
}

const tickOpt = { fill: '#666', fontSize: 12 };
const axisPadding = {
	x: { left: 10, right: 10 },
	y: { top: 30 },
};
const yAxisLabelOpt = { fontSize: 14 };
const yAxisDomain = ['auto', 'dataMax + 100'];

const Chart = ({ data, currentItem, chartAreaClick }: Chart) => {
	return (
		<>
			<ResponsiveContainer width='100%' height={500}>
				<ComposedChart data={data} onClick={chartAreaClick}>
					<XAxis dataKey='date' padding={axisPadding.x} tick={tickOpt} />
					<YAxis
						dataKey='value_bar'
						orientation='right'
						label={{
							...yAxisLabelOpt,
							value: 'Bar',
							position: 'insideTopRight',
						}}
						yAxisId='1'
						domain={yAxisDomain}
						padding={axisPadding.y}
						tick={tickOpt}
					/>
					<YAxis
						dataKey='value_area'
						orientation='left'
						label={{
							...yAxisLabelOpt,
							value: 'Area',
							position: 'insideTopLeft',
						}}
						yAxisId='0'
						domain={yAxisDomain}
						padding={axisPadding.y}
						tick={tickOpt}
					/>
					<Tooltip content={<CustomTooltip />} />
					<Legend />
					<Bar dataKey='value_bar' yAxisId={1} fill='#A3D6EC'>
						{data.map((data, index) => (
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

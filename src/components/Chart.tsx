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

const Chart = ({ data, currentItem, chartAreaClick }: Chart) => {
	return (
		<>
			<ResponsiveContainer width='100%' height={500}>
				<ComposedChart data={data} onClick={chartAreaClick}>
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

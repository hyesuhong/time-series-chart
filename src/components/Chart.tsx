import {
	Area,
	Bar,
	ComposedChart,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

export interface Mock {
	[key: string]: {
		id: string;
		value_area: number;
		value_bar: number;
	};
}

interface Chart {
	data: Mock;
}

const Chart = ({ data }: Chart) => {
	const chartData = Object.keys(data).map((d) => ({ date: d, ...data[d] }));
	return (
		<>
			<ResponsiveContainer width='100%' height={500}>
				<ComposedChart data={chartData}>
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
					<Tooltip />
					<Legend />
					<Bar dataKey='value_bar' barSize={10} fill='#A3D6EC' yAxisId={1} />
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

import { TooltipProps } from 'recharts';
import { NameType } from 'recharts/types/component/DefaultTooltipContent';
import { ValueType } from 'recharts/types/component/DefaultTooltipContent';

interface ChartTooltip extends TooltipProps<ValueType, NameType> {}

const Tooltip = ({ active, payload, label }: ChartTooltip) => {
	return active && payload && payload.length > 0 ? (
		<div>
			<h6>{label}</h6>
			<p>위치: {payload[0].payload.id}</p>
			{payload.map((p, index) => (
				<p key={index}>
					{p.name}: {p.value}
				</p>
			))}
		</div>
	) : null;
};

export default Tooltip;

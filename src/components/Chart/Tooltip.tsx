import { TooltipProps } from 'recharts';
import { NameType } from 'recharts/types/component/DefaultTooltipContent';
import { ValueType } from 'recharts/types/component/DefaultTooltipContent';
import styled from 'styled-components';

interface ChartTooltip extends TooltipProps<ValueType, NameType> {}

const Tooltip = ({ active, payload, label }: ChartTooltip) => {
	return active && payload && payload.length > 0 ? (
		<Wrapper>
			<h6>{label}</h6>
			<p>위치: {payload[0].payload.id}</p>
			{payload.map((p, index) => (
				<p key={index}>
					{p.name}: {p.value}
				</p>
			))}
		</Wrapper>
	) : null;
};

const Wrapper = styled.div`
	padding: 10px;
	background: #fff;
	border-radius: 6px;
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.05);

	h6 {
		font-size: 12px;
		font-weight: 400;
		color: #aaa;
		border-bottom: 1px solid #aaa;
		margin-bottom: 10px;
	}

	p {
		font-size: 14px;
		margin-bottom: 4px;
	}
`;

export default Tooltip;

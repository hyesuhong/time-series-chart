import styled, { keyframes } from 'styled-components';

const Loading = () => {
	return (
		<Wrapper>
			<p>
				Loading
				<LoadingDot $index={0} />
				<LoadingDot $index={1} />
				<LoadingDot $index={2} />
			</p>
		</Wrapper>
	);
};

const tongtong = keyframes`
	from {
		transform: translateY(-5px);
	}

	to {
		transform: translateY(0);
	}
`;

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	padding-left: 10px;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0.5);
	backdrop-filter: blur(10px);
	z-index: 100;

	display: flex;
	justify-content: center;
	align-items: center;

	p {
		display: flex;
		align-items: baseline;

		font-size: 20px;
		color: #333;
	}
`;

const LoadingDot = styled.span<{ $index: number }>`
	width: 4px;
	height: 4px;
	border-radius: 4px;
	background: #333;
	margin-left: 5px;

	animation: ${tongtong} 0.5s ${(props) => `${props.$index * 0.1}s`} alternate
		infinite;
`;

export default Loading;

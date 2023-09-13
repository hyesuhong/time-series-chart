import styled from 'styled-components';
import { errorType } from '../../utils/error';

const ErrorScreen = ({ status, statusText, message }: errorType) => {
	return (
		<Wrapper>
			{status && <h2>{status}</h2>}
			{statusText && <h4>{statusText}</h4>}

			<p>
				Please, try again.
				<br />
				{message && `(${message})`}
			</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(247, 110, 83, 0.5);
	backdrop-filter: blur(10px);
	z-index: 100;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h2 {
		font-size: 48px;
		font-weight: 700;
	}

	h4 {
		font-size: 24px;
		font-weight: 500;
	}

	p {
		font-size: 14px;
		margin-top: 20px;
		text-align: center;
	}
`;

export default ErrorScreen;

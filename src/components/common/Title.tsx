import styled from 'styled-components';

interface title {
	title: string;
	description?: string;
}

const Title = ({ title, description }: title) => {
	return (
		<Header>
			<h4>{title}</h4>
			{description && <p>{description}</p>}
		</Header>
	);
};

const Header = styled.header`
	margin: 30px auto 0;
	text-align: center;

	h4 {
		font-size: 24px;
		font-weight: 500;
	}

	p {
		font-size: 14px;
		color: #666;
		margin-top: 10px;
	}
`;

export default Title;

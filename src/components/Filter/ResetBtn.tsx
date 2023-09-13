import { MouseEvent, ReactNode } from 'react';

interface resetBtn {
	children: ReactNode;
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ResetBtn = ({ children, onClick }: resetBtn) => {
	return <button onClick={onClick}>{children}</button>;
};

export default ResetBtn;

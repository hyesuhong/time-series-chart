export type errorType = {
	status?: number;
	statusText?: string;
	message?: string;
};

export const getError = (error: unknown) => {
	const errorObj =
		error instanceof Error && error.cause
			? { ...error.cause, message: error.message }
			: { message: String(error) };

	return errorObj;
};

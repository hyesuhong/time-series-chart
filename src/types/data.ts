export type Obj<T> = { [key: string]: T };

export interface MockData {
	id: string;
	value_area: number;
	value_bar: number;
}

export type MockObj = Obj<MockData>;

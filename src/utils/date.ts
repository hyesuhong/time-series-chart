export const getRange = (data: string[] = []) => {
	if (data.length < 3) {
		return {};
	}

	const strToDate = data.map((d) => new Date(d).getTime());
	const min = Math.min(...strToDate);
	const max = Math.max(...strToDate);

	const startDate = new Date(min);
	const endDate = new Date(max);

	console.log(startDate, endDate);

	return { from: startDate, to: endDate };
};

export const dateRangeToStr = ({ from, to }: { from?: Date; to?: Date }) => {
	if (!(from && to)) {
		return '';
	}

	const fromYear = from.getFullYear();
	const fromMonth = from.getMonth() + 1;
	const fromDay = from.getDate();
	const fromHours = from.getHours();
	const fromMinutes = from.getMinutes();
	const fromSeconds = from.getSeconds();

	const toYear = to.getFullYear();
	const toMonth = to.getMonth() + 1;
	const toDay = to.getDate();
	const toHours = to.getHours();
	const toMinutes = to.getMinutes();
	const toSeconds = to.getSeconds();

	console.log(fromYear);
	if (fromYear === toYear && fromMonth === toMonth && fromDay === toDay) {
		const timeRange = `${fromHours}:${fromMinutes}:${fromSeconds} ~ ${toHours}:${toMinutes}:${toSeconds}`;
		return `${fromYear}년 ${fromMonth}월 ${fromDay}일(${timeRange})`;
	}

	const fromStr = `${fromYear}년 ${fromMonth}월 ${fromDay}일 ${fromHours}:${fromMinutes}:${fromSeconds}`;
	const toStr = `${toYear}년 ${toMonth}월 ${toDay}일 ${toHours}:${toMinutes}:${toSeconds}`;

	return `${fromStr} ~ ${toStr}`;
};

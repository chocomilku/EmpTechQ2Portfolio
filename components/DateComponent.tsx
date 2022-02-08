import { DateComponentProps } from "../utils/exports";

export const DateComponent = ({ startDate, endDate }: DateComponentProps) => {
	return (
		<>
			{startDate} - {endDate}
		</>
	);
};

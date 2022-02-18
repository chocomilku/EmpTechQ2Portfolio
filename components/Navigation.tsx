import { NavigationType } from "../utils/exports";
import Link from "next/link";

export const Navigation = ({ type, link }: NavigationType) => {
	const capital = (text: string): string => {
		return text.charAt(0).toUpperCase() + text.slice(1);
	};
	const linkCap = (link: string): string => {
		return link
			.replace("-", " ")
			.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
	};
	return (
		<>
			{!link ? (
				""
			) : (
				<div>
					<Link href={`/activities/${link}`}>
						<a>
							{capital(type)}: {linkCap(link)}
						</a>
					</Link>
				</div>
			)}
		</>
	);
};

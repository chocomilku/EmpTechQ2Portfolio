import { propRec } from "../utils/exports";
import Link from "next/link";
import { ListHeader } from "./ListHeader";
import { DateComponent } from "./DateComponent";

export const PostCard = ({ metadata }: propRec) => {
	// temporary code to not break current mdx files. will remove soon
	const dateCheck = (): boolean => {
		if (!metadata.date) return false;
		else return true;
	};
	return (
		<div>
			<Link href={`/activities/${metadata.slug}`}>
				<a>
					<h1>{metadata.title}</h1>
				</a>
			</Link>
			<p>{metadata.description}</p>
			<p>
				{dateCheck() ? (
					metadata.date
				) : (
					<DateComponent
						startDate={metadata.startDate}
						endDate={metadata.endDate}
					/>
				)}
			</p>
			<ul>
				{metadata.headers.map((item, i) => {
					return <ListHeader item={item} page={metadata.slug} key={i} />;
				})}
			</ul>
		</div>
	);
};

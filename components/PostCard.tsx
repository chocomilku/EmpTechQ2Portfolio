import { propRec } from "../utils/exports";
import Link from "next/link";

export const PostCard = ({ metadata }: propRec) => {
	return (
		<div>
			<Link href={`/activities/${metadata.slug}`}>
				<a>
					<h1>{metadata.title}</h1>
				</a>
			</Link>
			<p>{metadata.description}</p>
			<ul>
				{metadata.headers.map((item, i) => {
					return <li key={i}>{item}</li>;
				})}
			</ul>
		</div>
	);
};

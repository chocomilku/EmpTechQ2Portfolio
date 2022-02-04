import { propRec } from "../utils/exports";
import Link from "next/link";

export const PostCard = ({ metadata }: propRec) => {
	return (
		<div>
			{console.log("card", metadata)}
			<Link href={`/activities/${metadata.slug}`}>
				<a>
					<h1>{metadata.title}</h1>
				</a>
			</Link>
			<p>{metadata.description}</p>
			<ul>
				{metadata.headers.map((item) => {
					return <li>{item}</li>;
				})}
			</ul>
		</div>
	);
};

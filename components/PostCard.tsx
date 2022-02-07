import { propRec } from "../utils/exports";
import Link from "next/link";
import { ListHeader } from "./ListHeader";

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
					return <ListHeader item={item} page={metadata.slug} key={i} />;
				})}
			</ul>
		</div>
	);
};

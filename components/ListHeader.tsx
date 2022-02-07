import slugger from "github-slugger";
import Link from "next/link";
import { headerList } from "../utils/exports";

export const ListHeader = ({ item, page }: headerList) => {
	const id = slugger.slug(item);
	return (
		<li>
			<Link href={`/activities/${page}#${id}`}>
				<a>{item}</a>
			</Link>
		</li>
	);
};

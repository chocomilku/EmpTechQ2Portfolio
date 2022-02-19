import { propRec } from "../utils/exports";
import Link from "next/link";
import { ListHeader } from "./ListHeader";
import { DateComponent } from "./DateComponent";
import styles from "../styles/PostCard.module.scss";

export const PostCard = ({ metadata }: propRec) => {
	return (
		<Link href={`/activities/${metadata.slug}`} passHref scroll={false}>
			<div className={`${styles.item} dark:bg-zinc-900 bg-slate-100`}>
				<h1 className="text-accent dark:text-purple-500">{metadata.title}</h1>
				<h6 className={`${styles.date} text-accent dark:text-purple-400`}>
					<DateComponent
						startDate={metadata.startDate}
						endDate={metadata.endDate}
					/>
				</h6>
				<p>{metadata.description}</p>
				<ul>
					{metadata.headers.map((item, i) => {
						return <ListHeader item={item} page={metadata.slug} key={i} />;
					})}
				</ul>
			</div>
		</Link>
	);
};

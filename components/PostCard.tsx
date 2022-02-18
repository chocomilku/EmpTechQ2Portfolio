import { propRec } from "../utils/exports";
import Link from "next/link";
import { ListHeader } from "./ListHeader";
import { DateComponent } from "./DateComponent";
import styles from "../styles/PostCard.module.scss";

export const PostCard = ({ metadata }: propRec) => {
	return (
		<Link href={`/activities/${metadata.slug}`} passHref scroll={false}>
			<div className={styles.item}>
				<h1>{metadata.title}</h1>
				<h6 className={styles.date}>
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

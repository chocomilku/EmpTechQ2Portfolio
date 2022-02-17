import { propRec } from "../utils/exports";
import Link from "next/link";
import { ListHeader } from "./ListHeader";
import { DateComponent } from "./DateComponent";
import styles from "../styles/PostCard.module.scss";

export const PostCard = ({ metadata }: propRec) => {
	// temporary code to not break current mdx files. will remove soon
	const dateCheck = (): boolean => {
		if (!metadata.date) return false;
		else return true;
	};
	return (
		<Link href={`/activities/${metadata.slug}`} passHref>
			<div className={styles.item}>
				<h1>{metadata.title}</h1>
				<h6 className={styles.date}>
					{dateCheck() ? (
						metadata.date
					) : (
						<DateComponent
							startDate={metadata.startDate}
							endDate={metadata.endDate}
						/>
					)}
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

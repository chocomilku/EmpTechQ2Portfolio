import slugger from "github-slugger";
import Link from "next/link";
import { headerList } from "../utils/exports";
import styles from "../styles/ListHeader.module.scss";

export const ListHeader = ({ item, page }: headerList) => {
	const id = slugger.slug(item);
	return (
		<li className={styles.list}>
			<Link href={`/activities/${page}#${id}`} scroll={false}>
				<a>{item}</a>
			</Link>
		</li>
	);
};
